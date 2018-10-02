const express = require('express');
const router = express.Router();
const passport = require('passport');

const Stock = require('../../models/Stock');

router.get('/all', (req, res) => {
     Stock.find()
         .sort({date: -1})
         .populate('user', ['name'])
         .then(stocks => {
             res.json(stocks);
         })
         .catch(err => 
             res.status(404).json({error: err})
        );
});

router.post('/', passport.authenticate('jwt', {session: false}),(req, res) => {
    const stockFields = {};
    stockFields.user = req.user.id;
    stockFields.symbol = req.body.symbol;
    stockFields.quantity = req.body.quantity;
    
    new Stock(stockFields).save().then(stock => res.json(stock));
});

module.exports = router;