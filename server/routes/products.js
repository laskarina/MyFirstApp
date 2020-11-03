const express = require('express');
const product = require('../model/product');
const router  = express.Router();
const Product = require('../model/product')

//http://localhost:3001/api/v1/productsの場合、DB全てを表示
router.get('', function(req, res){
    product.find({},function(err, foundProducts){
    return res.json(foundProducts)
    })
})

//http://localhost:3001/api/v1/products/<<productId>>でDBをFind
router.get('/:productId', function(req, res){
    const productId = req.params.productId
    product.findById(productId,function(err, foundProduct){
        if(err){
            return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
        }
     return res.json(foundProduct)
    })
})

module.exports = router