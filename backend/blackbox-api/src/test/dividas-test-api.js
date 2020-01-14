const server = require('../server')
const { deepEqual, ok } = require('assert')
const Database = require('../helpers/database')
const Connection = require('../helpers/connection')
const axios = require('axios')

describe('Suite de teste da API', () => {
    const baseUrl = 'http://localhost:8000/api/v1'
    
    const env = process.env.NODE_ENV || 'development'
    require('dotenv').config({ path: `./config/${env}.env` })

    before(() => {
        db = new Database()
        connection = new Connection()
    })

    after(async () => {
        let conn = await connection.getConnection()
        const del = await db.deleteAll(conn)
        conn.destroy()
        server.shutdownServer()
    })

    it("Cadastro de uma divida ", async () => {
        const divida = {
            nome: "Flash",
            telefone: "5551999999999",
            nome_cartao: "Barry Allen",
            valor: 8,
            contrato: ""
        }

        const result = await axios({
            method: 'post',
            url: `${baseUrl}/cadastrodivida`,
            headers: {}, 
            data: divida
        })

        let conn = await connection.getConnection()
        const dividaDb = await db.obterDividaPorId(conn, result.data.result[0])

        deepEqual(divida.nome, dividaDb[0].nome)
        deepEqual(divida.telefone, dividaDb[0].telefone)
    })

    it("Obter todas as dividas do banco de dados", async () => {
        const DEFAULT_CLIENT_ADD = {
            valor: Math.floor(Math.random() * (130 - 100) + 100),
            nome: "Flash",
            telefone: "5551999999999",
            nome_cartao: 'Barry Allen',
        }

        let conn = await connection.getConnection()
        await db.deleteAll(conn)
        await db.insertDivida(conn, DEFAULT_CLIENT_ADD)
        await db.insertDivida(conn, DEFAULT_CLIENT_ADD)
        await db.insertDivida(conn, DEFAULT_CLIENT_ADD)
        await db.insertDivida(conn, DEFAULT_CLIENT_ADD)

        const result = await axios({
            method: 'get',
            url: `${baseUrl}/listadividas`
        })

        const dividas = await db.obterDividas(conn)

        deepEqual(dividas.length, 4)
        deepEqual(dividas[0].nome, DEFAULT_CLIENT_ADD.nome)
        deepEqual(dividas[0].telefone, DEFAULT_CLIENT_ADD.telefone)
    })

    it('Obter a divida buscando pelo id e pelo telefone', async () => {

        let conn = await connection.getConnection()
        await db.deleteAll(conn)

        const divida1 = {
            nome: 'Arrow',
            telefone: '5551555555',
            nome_cartao: 'Oliver Queen',
            valor: Math.floor(Math.random() * (130 - 100) + 100),
        }

        const divida2 = {
            nome: 'Homem de Ferro',
            telefone: '55519999487',
            nome_cartao: 'Tony Stark',
            valor: Math.floor(Math.random() * (130 - 100) + 100),
        }

        const divida1Id = await db.insertDivida(conn, divida1)
        await db.insertDivida(conn, divida2)

        const result = await axios({
            method: 'post',
            url: `${baseUrl}/recuperadivida`,
            headers: {}, 
            data: {
                id: divida1Id[0],
                telefone: divida1.telefone
            }
        })

        deepEqual(divida1Id[0], result.data.result[0].id)
        deepEqual(divida1.nome, result.data.result[0].nome)
    })

    it('Não obter a divida buscando pelo id e pelo telefone', async () => {

        let conn = await connection.getConnection()
        await db.deleteAll(conn)

        const divida1 = {
            nome: 'Arrow',
            telefone: '5551555555',
            nome_cartao: 'Oliver Queen',
            valor: Math.floor(Math.random() * (130 - 100) + 100),
        }

        const divida2 = {
            nome: 'Homem de Ferro',
            telefone: '55519999487',
            nome_cartao: 'Tony Stark',
            valor: Math.floor(Math.random() * (130 - 100) + 100),
        }

        const divida1Id = await db.insertDivida(conn, divida1)
        const divida2Id = await db.insertDivida(conn, divida2)

        const result = await axios({
            method: 'post',
            url: `${baseUrl}/recuperadivida`,
            headers: {}, 
            data: {
                id: divida2Id[0],
                telefone: divida1.telefone
            }
        })
        console.log(result.data.result[0].id)
        
        deepEqual(null, null)
    })
})