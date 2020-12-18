const express = require('express');
const app = express();
const path = require('path'); //dizine erişmek
const router = require('./routes/router');
const port = process.env.PORT || 3000;
const joiRouter = require('./routes/joiRouter')
const mongoose = require('mongoose');
const users = require('./models/users');


app.use('/static', express.static(path.join(__dirname, 'public'))) // statik dosyaları serve ederek herkese görünür şekilde paylaşabiliriz.
app.use(express.json()); // gelen application/json datalarını başlangıçta js objesine parse etmek için kullanılan bir middleware
app.use(express.urlencoded({
    extended: true
})); //urlencoded olarak gelen istekleri parse etmek için kullanılır
app.use('/', router);
app.use('/', joiRouter);

app.listen(port, () => {
    console.log('sunucu calisti');
});

const yeniKullanici = {
    ad:'firat emre',
    soyad:'sirvan',
    no:23
}
new users(yeniKullanici).save().then((docs) => {
    console.log('kayit yapildi' + docs);
});

//#region MONGOOSE BAĞLANTISI
mongoose.connect('mongodb+srv://femresirvan:147852369Fee@cluster0.4ubsi.mongodb.net/users?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(_ => {
    console.log('mongodb baglantisi saglandi');
}).catch(err => console.log('db baglantisi saglanamadi' + err));
//#endregion 
