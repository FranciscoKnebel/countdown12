var express = require('express');
app = express();
dotenv = require('dotenv').load();

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img'));

app.set("view options", {layout: false});
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + "/public/views");
app.set('view engine', 'ejs');

app.get('/12', function (req, res) {
	res.render('index.html', {date: process.env.date1});
});

app.get('/13', function (req, res) {
	res.render('index.html', {date: process.env.date2});
});

app.get('*', function (req, res) {
	res.render('index.html', {date: process.env.date1});
});

var port = process.env.PORT || 80; // 80 é a padrão do http

var listener = app.listen(port, function () {
	console.log('Ouvindo na porta ' + listener.address().port);
});
