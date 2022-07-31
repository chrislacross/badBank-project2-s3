require("dotenv").config();

var express = require('express');
var app = express();
var cors = require('cors');
var dal =  require('./dal.js');


//used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

/*create user account-this placeholder
app.get('/account/create/:name/:email/:password', function (req, res) {
    res.send({
        name: req.params.name,
        email: req.params.email,
        password: req.params.password
    });
});
*/

// create user account with dal
app.get('/account/create/:name/:email/:password', function (req, res) {
  //else create user   
    dal.create(req.params.name,req.params.email,req.params.password)
        .then((user) => {
            console.log(user);
            res.send(user);
        });
});

//log in

app.get('/account/login/:email/:password', function(req, res) {
    dal.findOne(req.params.email,req.params.password)
    .then((user) => {
        console.log(user);
        res.send(user);
    })

})

//all accounts
app.get('/account/all', function (req, res) {

    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

//create routes for deposit, withdraw, balance

app.get('/account/balance/:email/:password/:amount', function(req, res) {
    dal.updateBalance(req.params.email,req.params.password,+req.params.amount)
    .then((userBalance) => {
        console.log(userBalance);
        res.send(200, userBalance);
    })
})
console.log(process.env.PORT)

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Running on port: ' + port);



/* login user
app.get('/account/login/:email/:password', function (req, res) {
    res.send({
        email: req.params.email,
        password: req.params.password
    });
});


 // return all accounts
app.get('/account/all', function (req, res) {
    res.send({
        name:  'peter',
        email: 'peter@mit.edu',
        password: 'secret'
    });
});
*/
    
    
  


/* login user
app.get('/account/login/:email/:password', function (req, res) {
    res.send({
        email: req.params.email,
        password: req.params.password
    });
});
*/


/* all accounts
app.get('/account/all', function (req, res) {
    res.send({
        name:  'peter',
        email: 'peter@mit.edu',
        password: 'secret'
    });
});
*/




