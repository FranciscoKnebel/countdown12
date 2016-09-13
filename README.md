# countdown12

Pass a date param:
app.get('/:date', function (req, res) {
	res.render('index.html', {date: req.params.date});
});


Example usage: 
https://countdown12.herokuapp.com/September 13, 2018 15:30:00

Returns a day/hour/minute/second countdown to defined date.
