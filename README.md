# countdown12

Pass a date param:
app.get('/:date', function (req, res) {
	res.render('index.html', {date: req.params.date});
});
