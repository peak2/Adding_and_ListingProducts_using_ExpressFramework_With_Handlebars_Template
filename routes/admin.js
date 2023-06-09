const express = require('express');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next)=> {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true  //This activeAddProduct is passed to main-layout.handlebars to check for active page, wch is defined in main.css active class
    })
})

router.post('/add-product', (req, res, next)=> {
    products.push({title: req.body.title, price: '$20.25', description: 'A very interesting book, read to us by Mrs Bello when i was in JSS1'})
    //having the above key and values, it will be easier to use this.title, this.price, on our views handlebars
    res.redirect('/')
})


// module.exports = router;
exports.routes = router;
exports.products = products;