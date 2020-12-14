const express = require('express');
const joiRouter = express.Router();
const Joi = require('@hapi/joi');

joiRouter.get('/data',(req,res,next)=> {
    res.send('istek yapildi');
})

module.exports = joiRouter;