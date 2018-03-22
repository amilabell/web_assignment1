const express = require('express');
const router = express.Router();
const helper = require('../lib/helpers');
const server = require('../server');
const db = require('../database');

//router.post('/', helper.promiseWrapper(async function (req, res) {
    //await db.createNewUser(req.body);
router.post('/new', function(req, res, next){
    console.log(req.body);
    db.createNewUser(req.body).then(function(item){
        res.json(item);
        }).catch(next);
});

router.post('/new/dummy', function(req, res, next){
    console.log(req.body);
    db.createDummyUser(req.query._username).then(function(item){
        res.json(item);
        }).catch(next);
});


//router.get('/get', helper.promiseWrapper(async function (req, res) {
    //await db.printUsers('users');
router.get('/get', function(req, res, next) {
    db.printUsers().then(function(item){
        res.json(item);
        }).catch(next);
});

router.get('/change', function(req, res, next){
    console.log(req.body);
    db.changeUsers("005", "lastName", "Thomas").then(function(item){
        res.json(item);
        }).catch(next);
});
router.get('/delete', function(req, res, next){
    console.log(req.query);
    db.deleteUser(req.query._id).then(function(item){
        res.json(item);
        }).catch(next);
});
router.get('/find', function(req, res, next){
    db.findUser(req.query.name).then(function(item){
        res.json(item);
        }).catch(next);
});
module.exports = router;