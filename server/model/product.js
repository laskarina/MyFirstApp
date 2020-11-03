const mongoose = require('mongoose');
const { Schema } = mongoose;

//スキーマの定義(Tableのようなもの)
const ProductSchema = new Schema({
    coverImage:  String, // String is shorthand for {type: String}
    name: {type: String,  required: true, max:[60, '最大60文字までです']},
    price: Number,
    description: String,
    heding1: String,
    heding2: String,
    heding3: String,
    headingtext1: String,
    headingtext2: String,
    headingtext3: String
});

module.exports = mongoose.model('Product',ProductSchema);