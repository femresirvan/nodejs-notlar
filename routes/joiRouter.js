const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
const { required, isSchema } = require('@hapi/joi');
app.use(express.json())

app.get('/', (req, res, next) => {
    res.write('istek yapildii');
    next()
})
app.get('/data', (req, res, next) => {
    res.write('calisti')
    next()
})

const users = []
app.post('/data', (req, res, next) => {
    const usersschema = Joi.object({
        name: Joi.string().required(),
        password: Joi.number().integer().required().min(4)
    })
    const sonuc = usersschema.validate(req.body)
    if (sonuc.error) {
        res.send(sonuc.error)
    } else {
        const newuser = {
            name: req.body.name,
            password: req.body.password
        }
        users.push(newuser)
        res.send(users)
    }
    next()
})
const mw = (req, res, next) => {
    console.log("middleware çalışıyo");
    res.send()
}
app.use(mw)


app.listen(3000)