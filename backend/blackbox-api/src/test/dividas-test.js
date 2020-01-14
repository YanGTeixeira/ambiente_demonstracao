const { deepEqual, ok } = require('assert')
const Database = require('../helpers/database')
const Connection = require('../helpers/connection')

describe('Suite de teste para dividas', () => {
    
    const env = process.env.NODE_ENV || 'test'
    require('dotenv').config({ path: `./config/${env}.env` })

    let db
    let connection

    const DEFAULT_CLIENT_ADD = {
        nome: 'Batman',
        telefone: '5551999999999',
        nome_cartao: 'Bruce Wayne',
        valor: Math.floor(Math.random() * (130 - 100) + 100),
    }

    before(() => {
        db = new Database()
        connection = new Connection()
    })

    after(async () => {
        let conn = await connection.getConnection()
        const del = await db.deleteAll(conn)
        conn.destroy()
    })

    it('Deve cadastrar uma divida com dados vindos do front-end', async () =>{

        let conn = await connection.getConnection()
        let divida = await db.insertDivida(conn, DEFAULT_CLIENT_ADD)
        let [dividaAtual] = await db.obterDividaPorId(conn, divida)

        deepEqual(dividaAtual.id, divida[0])
    })

    it('Deve retornar a quantidade de dividas cadastrasdas no banco de dados', async () => {
        let conn = await connection.getConnection()
        await db.deleteAll(conn)
        await db.insertDivida(conn, DEFAULT_CLIENT_ADD)
        await db.insertDivida(conn, DEFAULT_CLIENT_ADD)
        await db.insertDivida(conn, DEFAULT_CLIENT_ADD)
        await db.insertDivida(conn, DEFAULT_CLIENT_ADD)

        let dividas = await db.obterDividas(conn)

        deepEqual(dividas.length, 4)
    })

    it('Deve recuperar uma divida de um cliente através do número de telefone e do id da transação', async () => {
        let conn = await connection.getConnection()
        let divida = await db.insertDivida(conn, DEFAULT_CLIENT_ADD)

        DEFAULT_CLIENT_ADD.id = divida[0]
        let expected = DEFAULT_CLIENT_ADD

        let [dividaAtual] = await db.obterDividaPorId(conn, divida)
        
        deepEqual(dividaAtual, expected)
    })

    it('Deve a retornar a divida de um determinado cliente buscando pelo id', async () => {
        let conn = await connection.getConnection()
        let divida = await db.insertDivida(conn, DEFAULT_CLIENT_ADD)

        DEFAULT_CLIENT_ADD.id = divida[0]
        DEFAULT_CLIENT_ADD.qtd =  1
        let expected = DEFAULT_CLIENT_ADD

        let [dividaAtual] = await db.obterDividaPorId(conn, divida)

        
        deepEqual(dividaAtual.nome, expected.nome)
        deepEqual(dividaAtual.nome_cartao, expected.nome_cartao)
        deepEqual(dividaAtual.id, expected.id)
    })

    // it("Deve retornar os dados da divida que tiver o id e o telefone", async () => {
        
    //     let conn = await connection.getConnection()
    //     await db.deleteAll(conn)

    //     const divida1 = {
    //         nome: 'Arrow',
    //         telefone: '5551555555',
    //         nome_cartao: 'Oliver Queen',
    //         valor: Math.floor(Math.random() * (130 - 100) + 100),
    //     }

    //     const divida2 = {
    //         nome: 'Homem de Ferro',
    //         telefone: '55519999487',
    //         nome_cartao: 'Tony Stark',
    //         valor: Math.floor(Math.random() * (130 - 100) + 100),
    //     }

    //     const divida1Id = await db.insertDivida(conn, divida1)
    //     await db.insertDivida(conn, divida2)

    //     const divida1Db = await db.obterDividaPorId(conn, divida1Id[0])

    //     const result = await db.obterDividaPorIdETelefone(conn, divida1Db.id, divida1Db.telefone)

    //     deepEqual(result.id, divida1Db.id)
    //     deepEqual(result.telefone, divida1Db.telefone)
    // }) 

    // it("Não deve retornar os dados da divida que tiver o id e o telefone", async () => {

    //     const conn = await connection.getConnection()
    //     await db.deleteAll(conn)

    //     const divida1 = {
    //         nome: 'Arrow',
    //         telefone: '5551555555',
    //         nome_cartao: 'Oliver Queen',
    //         valor: Math.floor(Math.random() * (130 - 100) + 100),
    //     }

    //     const divida2 = {
    //         nome: 'Homem de Ferro',
    //         telefone: '55519999487',
    //         nome_cartao: 'Tony Stark',
    //         valor: Math.floor(Math.random() * (130 - 100) + 100),
    //     }

    //     const divida1Id = await db.insertDivida(conn, divida1)
    //     const divida2Id = await db.insertDivida(conn, divida2)

    //     await db.obterDividaPorId(conn, divida1Id[0])
    //     const divida2Db = await db.obterDividaPorId(conn, divida2Id[0])

    //     const result = await db.obterDividaPorIdETelefone(conn, divida2Db.id, divida1.telefone)

    //     console.log(result)
    //     deepEqual(result, [])
    // })
})