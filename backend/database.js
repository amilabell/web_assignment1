var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/';
let db;

module.exports = {
       initDbConnection: function() {
           return new Promise(function (resolve, reject) {
               MongoClient.connect(url, (err, client) => {
                if (err) {
                    reject(err);
                } else {
                    db = client.db('anne_db');
                    resolve();
                }
           });
           });
       },
       createNewUser: function(user) {
           return new Promise(function (resolve, reject) {
               db.collection("users").insert(user, function(err, res) {
                   if (err) {
                      reject(err);
                   }
                   else{
                      resolve(res);
                   }
               });
           });
       },
       createDummyUser: function(name) {
           return new Promise(function (resolve, reject) {
               db.collection("users").insert({"username": name, "password": "dummypassword"} , function(err, res) {
                   if (err) {
                      reject(err);
                   }
                   else{
                      resolve(res);
                   }
               });
           });
       },
       printUsers: function(name){
           return new Promise(function (resolve, reject){
               db.collection('users').find().toArray(function(err, res){
                   if(err){
                       reject(err);
                   }
                   else{
                       resolve(res);
                   }
               })
           })
       },
       changeUsers: function(id_number, changed, change_val){
           return new Promise(function (resolve, reject) {
               db.collection("users").updateOne({ "_id": id_number },
               { $set:
                  {
                    changed: change_val,
                  }
               },
            function(err, res) {
                   if (err) {
                      reject(err);
                   }
                   else{
                      resolve(res);
                   }
            }
        )
      })
    },
    deleteUser: function(id_number){
           return new Promise(function (resolve, reject){
               db.collection('users').remove({"_id": id_number})(function(err, res){
                   if(err){
                       reject(err);
                   }
                   else{
                       resolve(res);
                   }
               })
           })
       },
       findUser: function(username){
           return new Promise(function (resolve, reject){
               db.collection('users').find({"username": username}).toArray(function(err, res){
                   if(err){
                       reject(err);
                   }
                   else{
                       resolve(res);
                   }
               })
           })
       },
       
       //Contacts
      createNewContact: function(contact) {
           return new Promise(function (resolve, reject) {
               db.collection("contacts").insert(contact, function(err, res) {
                   if (err) {
                      reject(err);
                   }
                   else{
                      resolve(res);
                   }
               });
           });
       },
       createContact: function(id_number, data) {
           return new Promise(function (resolve, reject) {
               db.collection("contacts").insert(data , function(err, res) {
                   if (err) {
                      reject(err);
                   }
                   else{
                      resolve(res);
                   }
               });
           });
       },
       printContacts: function(name){
           return new Promise(function (resolve, reject){
               db.collection('contacts').find().toArray(function(err, res){
                   if(err){
                       reject(err);
                   }
                   else{
                       resolve(res);
                   }
               })
           })
       },
       printContactsOfUser: function(username){
           return new Promise(function (resolve, reject){
               db.collection('contacts').find({"username": username}).toArray(function(err, res){
                   if(err){
                       reject(err);
                   }
                   else{
                       resolve(res);
                   }
               })
           })
       },
       editContact: function(contactid, changed, change_val){
           return new Promise(function (resolve, reject) {
               db.collection("users").updateOne({ "_id": contactid },
               { $set:
                  {
                    changed: change_val,
                  }
               },
            function(err, res) {
                   if (err) {
                      reject(err);
                   }
                   else{
                      resolve(res);
                   }
            }
        )
      })
    },
    getContact: function(contactid){
           return new Promise(function (resolve, reject){
               console.log(contactid);
                db.collection('contacts').find({"_id": ObjectId(contactid)}).toArray(function(err, res){
                   if(err){
                       reject(err);
                   }
                   else{
                       resolve(res);
                   }
               })
           })
       },
       changeContact: function(id_number, changed){
           return new Promise(function (resolve, reject) {
               db.collection("contacts").updateOne({ "_id": ObjectId(id_number) },
               { $set: changed
               },
            function(err, res) {
                   if (err) {
                      reject(err);
                   }
                   else{
                      resolve(res);
                   }
            }
        )
      })
    },
    deleteContact: function(id_number){
           return new Promise(function (resolve, reject){
               db.collection("contacts").remove({"_id": ObjectId(id_number)})(function(err, res){
                   if(err){
                       reject(err);
                   }
                   else{
                       resolve(res);
                   }
               })
           })
       },
}
    