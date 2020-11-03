const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db')

const productRoutes = require('./routes/products');

//index.js読み込み時、fake-dbよりデータをclear&insert
mongoose.connect(config.DB_URI, {
    useNewUrlParser: true
}).then(
    () => {
        const fakeDb = new FakeDb()
        fakeDb.initDb()
    }
)

const app = express()

///api/v1/productsがリクエストされた場合、productRoutesを実行
app.use('/api/v1/products', productRoutes)

const PORT = process.env.PORT || '3001'

app.listen(PORT, function(){
    console.log('I am running!!')
})
