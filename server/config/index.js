
//本番環境：prod、開発環境：dev
if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}