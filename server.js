var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne={
    title:'rango life_three',
    heading:'article one',
    date:' aug 23 2012',
    content:`<p>gowtham,muthu and arun lived a njoyable life in hindusthan institue of technology
            </p>
            <ol>
                <li>
                    every sunday they went to movies and had most peace full life
                </li>
                <li>
                    every sunday they went to movies and had most peace full life
                </li>
                
            </ol>`
    
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article_one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article_one.html'));
});
app.get('/article_two/article_two', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article_two.html'));
});
app.get('/article_three', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article_three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
