const platformClient = require('purecloud-platform-client-v2')
const request = require('request');
const Database = require('../helpers/database')
const Connection = require('../helpers/connection')

exports.blackboxclicktocall = (params, res) => {
    res.set('Access-Control-Allow-Origin', "*")
    res.set('Access-Control-Allow-Methods', 'GET, POST')

    request.post({ url: 'https://login.mypurecloud.com/oauth/token', form: { grant_type: 'client_credentials' } }, function (err, httpResponse, body) {
        console.log(err)

        if (err == null) {
            let corpo = JSON.parse(body);
            console.log(corpo)
            let json = {
                "token": corpo.access_token,
                "corpo": params
            }
            inserirLead(json, res)
        } else {
            console.log("erro1")
            res.status(400).send("error")
        }
    }).auth(process.env.CLIENTID, process.env.CLIENTSECRET, true);
}

async function inserirLead(json, res) {
    console.log('json1')
    console.log(json)
    console.log(json.info)
    platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = json.token;
    const outboundApi = new platformClient.OutboundApi();
    let d = new Date();
    let hash = Buffer.from("" + d.getTime()).toString('base64');
    let valor = Math.floor(Math.random() * (120 - 100) + 100);

    let contactData = [{
        name: json.corpo.nome,
        contactListId: process.env.CONTACTLISTID,
        data: {
            nome: json.corpo.nome,
            telefone: `55${json.corpo.telefone}`,
            nome_cartao: json.corpo.nome_cartao,
            contrato: '',
            valor: valor,
            hash: hash,
            custom1: "",
            custom2: ""
        },
        callable: true
    }];

    console.log("JSONN")
    console.log(json)

    if (json.corpo.acao === 'religar') {
        contactData[0].data.custom2 = json.corpo.id
    }

    if (json.corpo.acao !== 'religar') {
        console.log("JSONN Banco")
        console.log(json)    
        const dividaId = await cadastraDadosNoBanco(res, json)
        contactData[0].data.custom2 = dividaId[0]
    }

    console.log("Dados do Contato", contactData)

    try {
        const post = await outboundApi.postOutboundContactlistContacts(process.env.CONTACTLISTID, contactData, true, true)
        console.log("Post ==== ", post)
        res.status(200).send({ result: post });

    } catch (err) {
        console.log(err)
        res.status(400);
    }

};

const cadastraDadosNoBanco = async (res, json) => {

    console.log('Upload successful! ');
    const db = new Database()
    const connection = new Connection()
    const conn = await connection.getConnection()
    const divida = await db.insertDivida(conn, json.corpo)
    if (divida) {
        return divida
    } else {
        console.log('Error! ' + error);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ result: "Erro ao cadastrar uma divida." }));
        res.end('error');
    }
}
