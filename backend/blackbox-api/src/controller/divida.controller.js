const Database = require('../helpers/database')
const Connection = require('../helpers/connection')
const service = require('../service/service')
const dividaModal = require('../Model/divida.model')

exports.cadastroDivida = async (req, res) => {
    service.blackboxclicktocall(req.body, res)
}

exports.religar = async (req, res) => {
    service.blackboxclicktocall(req.body, res)
}

exports.listaDividas = async (req, res) => {
    const db = new Database()
    const connection = new Connection()
    const conn = await connection.getConnection()
    let dividas = await db.obterDividas(conn)
    if(dividas) {
        res.status(200).json({
            success: true,
            result: dividas
        })
    } else {
        resolveError(res, "Busca de dividas")
    }
    console.log(dividas);
}

exports.recuperaDivida = async (req, res) => {
    const db = new Database()
    const connection = new Connection()
    const conn = await connection.getConnection()
    let dividas = await db.obterDividaPorId(conn, req.body.id)
    if(dividas) {
        res.status(200).json({
            success: true,
            result: dividas
        })
    } else {
        resolveError(res, "Busca de dividas")
    }
}

exports.atualizarDivida = async (req, res) => {
   await dividaModal.atualizaDivida(req.body, res)
}

const resolveError = (res, result) => {
    res.status(200).json({
        success: false,
        message: `${result.mensagem}`,
        result: `${result}`
    })
}