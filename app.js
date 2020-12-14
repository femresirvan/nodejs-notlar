const express = require('express');
const app = express();
const path = require('path'); //dizine erişmek
const router = require('./routes/router');
const port = process.env.PORT || 3000;
const joiRouter = require('./routes/joiRouter')

app.use('/static', express.static(path.join(__dirname, 'public'))) // statik dosyaları serve ederek herkese görünür şekilde paylaşabiliriz.
app.use(express.json()); // gelen application/json datalarını başlangıçta js objesine parse etmek için kullanılan bir middleware
app.use(express.urlencoded({extended : true})); //urlencoded olarak gelen istekleri parse etmek için kullanılır
app.use('/',router);
app.use('/',joiRouter);

app.listen(port, () => {
    console.log('sunucu calisti');
});
