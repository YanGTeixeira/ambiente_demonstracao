const knex = require('knex')({
	client: 'mysql2',
	connection: {
		host: '35.202.9.6',
		port: '3306',
		user: 'xlab',
		password: 'Rr7Yr8NxJB4jhtK',
		database: 'lp_vendas',
		dateStrings: true
	},
	pool: {
		min: 1,
		max: 5
	}
});

module.exports = knex;