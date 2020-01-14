
class Database {
    async insertDivida(conn, req) {
        try {
            let divida = await conn('divida').insert({
                nome: req.nome,
                nome_cartao: req.nome_cartao,
                telefone: req.telefone,
                valor: req.valor,
                status: 'pendente'
            })
            return divida
        } catch (error) {
            return error
        }
    }

    async obterDividas(conn) {
       
        return await conn.select('id', 'dt_criacao', 'valor', 'nome_cartao', 'nome', 'telefone', 'status')
            .table('divida')
            .finally(() => {
                conn.destroy();
            })
            .error(() => {
                console.log(err);
                "error";
            });
            
    }
    
    async obterDividaPorId(conn, id) {
        return await conn.select('id', 'valor', 'nome', 'nome_cartao','telefone')
            .table('divida')
            .where('id', id)
            .finally(() => {
                conn.destroy();
            })
            .error(() => {
                console.log(err);
                "error";
            });
    }

    async obterDividaPorIdETelefone(conn, id, telefone) {
        return await conn('divida')
            .select(conn.raw("Count(id) as qtd"), 'id', 'valor', 'nome', 'nome_cartao','telefone')
            .where('id', id)
            .where('telefone', telefone)
            .finally(() => {
                conn.destroy();
            })
            .error(() => {
                console.log(err);
                "error";
            })
    }

    async deleteAll(conn) {
        return await conn('divida').del()
    }

    async insereMovimento(conn, dividaId, pagtoId, codRetorno, descRetorno) {
        try {
            let divida = await conn('movimento').insert({
                id_divida: dividaId, 
                id_pagto: pagtoId, 
                cod_retorno: codRetorno, 
                desc_retorno: descRetorno
            })
            return divida
        } catch (error) {
            return error
        }
    }

    async updateDivida(conn, statusRetorno, dividaId) {
        try {
            return await conn('divida')
                .where('id', '=', dividaId)
                .update({status: statusRetorno})
        } catch (error) {
            return error
        }
    }
}

module.exports = Database