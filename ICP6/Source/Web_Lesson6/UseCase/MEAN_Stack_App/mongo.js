/**
 * Created by karthik on 7/14/17.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require("body-parser");
var express = require('express');
var cors = require('cors');
var app = express();
var mongodb = require('mongodb');

var url='mongodb://jyoti:nullvalue1@ds119113.mlab.com:19113/assignment';//1.Modify this url with the credentials of your db name and password.
var ObjectID = require('mongodb').ObjectID;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/create', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        insertDocument(db, req.body, function() {
            res.write("Successfully inserted");
            res.end();
        });
    });
});

app.get('/get', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }

        db.collection('books').find().toArray(function(err, result){
            if(err)
            {
                res.write("get Failed");
                res.end();
            }else
            {

                res.send(JSON.stringify(result));
            }
            console.log("Got All Documents");

        });
    });

});

app.get('/delete/:toBeDeleted_id', function (req, res) {
    // 2.Connect to MongoDB . Handle the error and write the logic for deleting the desired book
    MongoClient.connect(url, function(err, db) {
        if(err)
        {
            res.write("Failed,There was error while connecting to database");
            res.end();
        }
        deleteBook(db, req.params.toBeDeleted_id, function () {
            res.write("book is deleted");
            res.end();
        });
    });
});


app.get('/update/:toBeUpdated_id', function (req, res) {
    //3.connect to MongoDB. Handle the error and write the logic for updating the selected field
    MongoClient.connect(url, function(err, db) {
        if (err) {
            res.write("Failed,There was error while connecting to database");
            res.end();
        }
        var book = {};
        book._id = new ObjectID(req.params.toBeUpdated_id);
        var newBook={};
        newBook.ISBN = req.query.ISBN;
        newBook.bookName = req.query.bookName;
        newBook.authorName = req.query.authorName;

        db.collection('books').updateOne(book,{'$set': newBook },function(err,result){
            if(err)
            {
                res.write("Registration Failed, Error While Registering");
                res.end();
            }
            console.log("One book added to collection");
        });
    });

});

var insertDocument = function(db, data, callback) {
    db.collection('books').insertOne( data, function(err, result) {
        if(err)
        {
            res.write("Registration Failed, Error While Registering");
            res.end();
        }
        console.log("Inserted a document into the books collection.");
        callback();
    });
}
var deleteBook = function (db,data,callback) {
    db.collection('books').deleteOne( {_id: new mongodb.ObjectID(data)}, function(err, result) {
        if(err)
        {
            res.write("Registration Failed, Error While Registering");
            res.end();
        }
        console.log("Deleted book from collection.");
        callback();
    })
};

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});