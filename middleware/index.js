const restify = require('restify');

const corsMiddleware = require('restify-cors-middleware');

const cors = corsMiddleware({
	preflightMaxAge: 5,
	origins: ['*']
});

const server = restify.createServer({
	name: 'Trabalho C216'
});

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
server.pre(cors.preflight);
server.use(cors.actual);

const mysql = require('mysql');

const connectionUri = {
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'C216-l1'
};

function inserir(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('content-type','application/json');
	res.charSet('UTF-8');
	
	let produto = {
		nome : req.body.nome,
		descricao : req.body.descricao,
		marca : req.body.marca,
		preco : req.body.preco,
	};

	let connection = mysql.createConnection(connectionUri);
	let strQuery = `INSERT INTO produto (nome, descricao, marca, preco) VALUES` +
	        	   `('${produto.nome}', '${produto.descricao}', '${produto.marca}', '${produto.preco}');`
	console.log(strQuery);
	connection.query(strQuery, function(err, rows, fields) {
		if (!err) {
			res.json(rows);
		} else {
			res.json(err);
		}
	});
	connection.end();
};

function listar(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('content-type','application/json');
	res.charSet('UTF-8');
	let connection = mysql.createConnection(connectionUri);
	let strQuery = 'SELECT * FROM produto;';
	console.log(strQuery);
	connection.query(strQuery, function(err, rows, fields) {
		if (!err) {
			res.json(rows);
		} else {
			res.json(err);
		}
	});
	connection.end();
};

function listarById(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('content-type','application/json');
	res.charSet('UTF-8');
	let connection = mysql.createConnection(connectionUri);
	let strQuery = 'SELECT * FROM produto where id=' + req.params.id;
	console.log(strQuery);
	connection.query(strQuery, function(err, rows, fields) {
		if (!err) {
			res.json(rows);
		} else {
			res.json(err);
		}
	});
	connection.end();
};

function atualizar(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('content-type','application/json');
	res.charSet('UTF-8');

	let produto = {
		id : req.body.id,
		nome : req.body.nome,
		descricao : req.body.descricao,
		marca : req.body.marca,
		preco : req.body.preco
	};

	let connection = mysql.createConnection(connectionUri);
	let strQuery = `UPDATE produto SET ` + 
	                `nome = '${produto.nome}', ` +
					`descricao = '${produto.descricao}', ` +
					`marca = '${produto.marca}', ` +
					`preco = '${produto.preco}' ` +
					`WHERE id = '${produto.id}';`
	
	console.log(strQuery);
	connection.query(strQuery, function(err, rows, fields) {
		if (!err) {
			res.json(rows);
		} else {
			res.json(err);
		}
	});
	connection.end();
};

function excluir(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('content-type','application/json');
	res.charSet('UTF-8');

	let connection = mysql.createConnection(connectionUri);
	let strQuery = `DELETE FROM produto WHERE id = '${req.body.id}';`
	
	console.log(strQuery);
	connection.query(strQuery, function(err, rows, fields) {
		if (!err) {
			res.json(rows);
		} else {
			res.json(err);
		}
	});
	connection.end();
};

const prefix = '/produto';

server.post(prefix + '/inserir', inserir);
server.get(prefix + '/listar', listar);
server.get(prefix + '/listar/:id', listarById);
server.put(prefix + '/atualizar', atualizar);
server.del(prefix + '/excluir', excluir);

const port = process.env.PORT || 5000;

server.listen(port, function() {
	console.log('%s rodando', server.name);
});