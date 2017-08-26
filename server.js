var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
    article1: {
    title:'amit\'s first article',
    heading:'this is my first article',
    date:'25-08-2017',
    content:`<p>
                this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!
                this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!
            </p>
                    
            <p>
                this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!
                this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!
            </p>
                    
            <p>
                this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!
                this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!
                this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!
            </p>`,
    

    },
    article2: {title:'amit\'s second article',
    heading:'this is my second article',
    date:'26-08-2017',
    content:`<p>
                this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!
                this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!
            </p>`,
    },
    article3: {title:'amit\'s third article',
    heading:'this is my third article',
    date:'27-08-2017',
    content:`<p>
                this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!this is so cool!!!
            </p>`,
    },
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate=`
    <!DOCTYPE html>
    <html>
        
        <head>
            
            <!-- don't play with this text below-->
    		<meta charset="utf-8">
    		<meta name="viewport" content="width=device-width, initial-scale=1">
    		<!-- Latest compiled and minified CSS -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    		<!-- jQuery library -->
    		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    		<!-- Latest compiled JavaScript -->
    		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    		<!-- don't play with this text above -->
    		<link href="/ui/style.css" rel="stylesheet" />
            
            <title>
                ${title}
            </title>
            
        </head>
        
        <body>
            
            <div class="container">
                <div class=jumbotron>
                    <a href="/">home</a>
                    <hr/>
                    <div class="text-center">
                        <h1>
                            ${heading}
                        </h1>
                    </div>
                    
                    <div>
                        <blockquote>
                            <footer class="pull-right">created on ${date}</footer>    
                        </blockquote>
                    </div>
                    
                    <hr/>
                    <div class="text-primary">
                       ${content}
                    </div>
                </div>
            </div>
            
        </body>
    </html>`;
    return htmlTemplate
    ;
}


app.get('/:articleName',function (req,res) {
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

var counter = 0;
app.get('/counter', function (req, res){
    counter = counter + 1;
    res.send(counter.toString());
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


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
