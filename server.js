var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
   user:' arunnivethan',
   database:'arunnivethan',
   host:'db.imad.hasura-app.io',
   port:'5432',
   password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
var articles={
'article-one':{
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
    
},
'article-two':{ title:'rango life_three',
    heading:'article two',
    date:' aug 26 2013',
    content:`<p>gowtham,muthu and arun lived a njoyable life in hindusthan institue of technology
            </p>
            <ol>
                <li>
                    every sunday they went to movies and had most peace full life in article two
                </li>
                <li>
                    every sunday they went to movies and had most peace full life
                </li>
                
            </ol>`
    
},
'article-three':{ title:'rango life_three',
    heading:'article three',
    date:' aug 23 2014',
    content:`<p>gowtham,muthu and arun lived a njoyable life in hindusthan institue of technology
            </p>
            <ol>
                <li>
                    every sunday they went to movies and had most peace full life in article three
                </li>
                <li>
                    every sunday they went to movies and had most peace full life
                </li>
                
            </ol>`
    
}
};
function createhtml(data)
{
   var title=data.title;
   var heading=data.heading;
   var date=data.date;
   var content=data.content;
var articletemp=`<html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viewport" content="width-device-width ,initial-scale-1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    
        </head>
        <boby>
        <div class="container">
        <div>
            <a href ="/">Home</a>
        </div>
        <hr/>
        <h3>${heading} </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
            </div>
            </div>
    </boby>
</html>
`;
return articletemp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool = new Pool(config);
app.get('/test-db', function (req, res){
    pool.query('SELECT *FROM test',function(err,result){
        if (err){
            res.status(500).send(err,result);
        }
        else
        {
            res.send(JSON.stringify(result));
        }
        
    });
    
});
var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});

app.get('/article/:articleName', function (req, res) {
    var articleName=req.params.articleName;
    
  pool.query('SELECT * FROM article WHERE title=kulambu powder');
  res.send(createhtml(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
