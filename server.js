var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogs');
var Blogpost = require('./models/blogpost');


var app = express();


// Set up body-parser
app.use(bodyParser.urlencoded({ extended : true }));

// Set up static page directory
app.use(express.static(__dirname + '/public'));

// Set HBS view engine
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/api/blogs', function (req, res){
	Blogpost.find(function (err, allBlogposts){
		res.json({ posts : allBlogposts});
	});
});



// Server listening?
var server = app.listen(process.env.PORT || 3000, function(){
	console.log('HEY! LISTEN!');
});
