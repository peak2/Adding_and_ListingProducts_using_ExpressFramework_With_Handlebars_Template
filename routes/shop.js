const express = require('express');
const adminData = require('./admin')
const router = express.Router();


router.get('/', (req, res, next)=> {
    const products = adminData.products;
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop',  
        hasProducts: products.length > 0,
        activeShop: true,      //This activeShop is passed to main-layout.handlebars to check for active page, wch is defined in main.css active class
        productCSS: true
    })
})


module.exports = router;
