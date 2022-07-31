require("dotenv").config();

const mongoURL = process.env.MONGODB_URL

const MongoClient   = require('mongodb').MongoClient;
// const url           = 'mongodb://localhost:27017';
const url = 'mongodb+srv://devops2:Develop1@badbank.ituby.mongodb.net/?retryWrites=true&w=majority'
let db              = null;


//connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log("Connected successfully to db server");

    //connect to myproject database
    db = client.db('myproject');
});

//create user account
function create(name, email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    })
}
//find a user
async function findOne(email, password) {
    console.log(email,password);
    const collection = db.collection('users');
    const user = await collection.findOne( {
        email, password
    })
    return user
}

//all users
function all(){
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
            });
    })
}

//create functions for deposit, withdraw, balance

//deposit

async function updateBalance(email, password, amount) {
    const collection = db.collection('users');
     await collection.updateOne( {
        email:email, password:password
    }, {
        $inc:{
            balance:amount
        }
    })
    const user = await collection.findOne( {
        email, password
    })
    return user.balance
    //const user = await collection.checkBalance( {
       // email, password, (balance + amount)
     }

//withdraw

//async function makeWithdrawal(email, password, amount)

// balance

async function checkBalance(email, password, balance){
    const collection = db.collection('users');
    const user = await collection.checkBalance( {
        email, password, balance
    })
        return user

}



module.exports = {create, all, findOne, updateBalance};
