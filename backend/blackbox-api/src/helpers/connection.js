require('mysql2');

class Connection {
    
    async getConnection() {
        var knex = require('knex')({
            client: 'mysql2',
            connection: {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_DATABASE,
                port: process.env.DB_PORT,
                timezone: 'UTC',
                dateStrings: true
            },
            pool: {
                min: 2,
                max: 10
            }
        });
        return knex;
    }
}

module.exports = Connection