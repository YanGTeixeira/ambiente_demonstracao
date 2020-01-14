const Database = require('../helpers/database')
const Connection = require('../helpers/connection')


exports.atualizaDivida = async (dados, res) => {
    const db = new Database()
    const connection = new Connection()
    const conn = await connection.getConnection()

    let statusAtualizado = "negado";
    if (dados.returncode == "00" || dados.returncode == "000") {
        statusAtualizado = "pago";
    }

    let insere = await db.insereMovimento(conn, dados.id, dados.paymentid, dados.returncode, dados.returnmessage)
    let update = await db.updateDivida(conn, statusAtualizado, dados.id)

    if(insere && update) {
        res.status(200).json({
            success: true,
            result: insere
        })
    } else {
        res.status(200).json({
            success: false,
            message: "Erro ao efetuar a transação no banco de dados"
        })
    }
}