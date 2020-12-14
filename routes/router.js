const express = require('express');
const router = express.Router();

router.get('/id/:id/sifre/:sifre', (req, res, next) => {
    res.send(`${req.params.id} ve ${req.params.sifre}`);
});


// MIDDLEWARE ÖRNEĞİ
router.get('/', (req, res, next) => {
    next()
});

router.get('/',(req,res,next) => {
    console.log('middleware da çalıştı')
    res.send('OK');
})

module.exports = router;