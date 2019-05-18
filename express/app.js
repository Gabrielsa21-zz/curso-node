var express = require('express');
var app = express();

//Agora	 precisamos	 alterar	 nosso	 código	 para	 ensinar	 o	 Express	 que	 ele	 deve	 usar	 o	 EJS	 como
// mecanismo	de	template	para	renderizar	nossas	páginas

app.set('view engine', 'ejs');

//O	 método	 get	 recebemos	 o	 endereço	 que	 queremos	 tratar	 e	 também	 a	 função	 responsável	 por
// executar	 a	 lógica	 relativa	 a	 requisição.	 Perceba	 que	 ela	 também	 recebe	 um	request	 e	 um	response,	 do
// mesmo	jeito	que	já	fizemos	mais	cedo.	Por	fim,	invocamos	o	método	send	para	enviar	um	texto	para	o
// navegador
app.get('/produtos', function (req, res) {
	res.send("listagem	de	produtos");
	// res.render('produtos/lista');
});
var server = app.listen(3000, function () {
	console.log("Servidor rodando");
});
