const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const FakeDb = require('./fake-db')

const productRoutes = require('./routes/products');
const path = require('path')

//index.js読み込み時、fake-dbよりデータをclear&insert
mongoose.connect(config.DB_URI, {
    useNewUrlParser: true
}).then(
    () => {

        //DB初期化はテスト環境且つ、実施したい時のみコメントアウトを外す事
        if(process.env.NODE_ENV !== 'production'){
            const fakeDb = new FakeDb()
            //fakeDb.initDb()
        }
    }
)

const app = express()

///api/v1/productsがリクエストされた場合、productRoutesを実行
app.use('/api/v1/products', productRoutes)

//本番環境でBuildする時のみdist配下を読み込ませる
if(process.env.NODE_ENV === 'production'){
    const appPath = path.join( __dirname,'..', 'dist', 'my-first-app')
    app.use(express.static(appPath))
    app.get("*", function(req, res){
        res.sendFile(path.resolve(appPath, "index.html"))
    })
}


const PORT = process.env.PORT || '3001'

app.listen(PORT, function(){
    console.log('I am running!!')
})
