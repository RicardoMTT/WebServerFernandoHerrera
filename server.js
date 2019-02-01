const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');//va a ver un direct. q contendra todos mis parciales.
app.set('view engine', 'hbs'); 

//Helpers
hbs.registerHelper('getAnio', () => {
	return new Date().getFullYear();
})

app.get('/',(req, res) => {

	res.render('home.hbs',{
		nombre:'Ricardo',
		anio:new Date().getFullYear()
	});
});


app.get('/about',(req, res) => {
	res.render('about.hbs',{
		anio:new Date().getFullYear()
	});
});

app.listen(port, () => {
	console.log(`Escuchando peticiones en el puerto ${ port }`);
});