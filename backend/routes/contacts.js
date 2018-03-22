const express = require('express');
const router = express.Router();
const helper = require('../lib/helpers');
const server = require('../server');
const db = require('../database');

router.post('/new', function(req, res, next){
    console.log(req.body);
    db.createNewContact(req.body).then(function(item){
        res.json(item);
        }).catch(next);
});
router.get('/getAll', function(req, res, next) {
    db.printContacts().then(function(item){
        res.json(item);
        }).catch(next);
});
router.get('/get', function(req, res, next) {
    db.printContactsOfUser(req.query.username).then(function(item){
        res.json(item);
        }).catch(next);
});
router.get('/getOne', function(req, res, next) {
    db.getContact(req.query._id).then(function(item){
        console.log(req.query._id);
        res.json(item);
        }).catch(next);
});
router.put('/changeContact', function(req, res, next) {
    db.changeContact(req.query._id, req.body).then(function(item){
        console.log(req.query._id);
        res.json(item);
        }).catch(next);
});
router.delete('/delete', function(req, res, next){
    console.log(req.query);
    db.deleteContact(req.query._id).then(function(item){
        res.json(item);
        }).catch(next);
});
module.exports = router;