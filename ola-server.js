var http = require('http');
//primeira coisa que precisamos é criar uma biblioteca responsavel por todo o tratamento do protocolo Http.
//A função require é responsavel por carregar as bibliotecas que estao disponiveis no node.

//Para saber mais acesse a pagina wwww.commonjs.org/.

var ip = 'localhost';
var porta = 3000;

// A	configuração	do	servidor,	contudo,	é	a	parte	um	pouco	mais	complicada.	Note	que	foi	necessário
// fornecer	uma	função	que	será	responsável	por	tratar	todas	as	requisições	que	chegarem no	sistema	pelo
// IP	e	porta	indicados.	Essa	função	recebe	dois parâmetros: requisição e resposta.
http.createServer(function (req, res) {
    //Create Server como o proprio nome diz cria um servidor
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello World\n');
    //Dai chamamos o Listen para indicar qual porta e endereço IP esse servidor vai monitorar. Essa é a parte simples!
}).listen(porta, ip);


console.log('Servidor rodando em http: //' + ip + ':' + porta);

