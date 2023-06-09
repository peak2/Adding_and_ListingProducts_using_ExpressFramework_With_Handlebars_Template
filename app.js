const express = require('express');
const path = require('path')
const expressHbs = require('express-handlebars')

// const adminRoutes = require('./routes/admin.js')
const adminData = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

const app = express();


// app.engine('handlebars', expressHbs())   //Without using layouts
app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'handlebars'}))  //using layouts 
app.set('view engine', 'handlebars'); 
app.set('views', 'views')  //d first views is ur local views folder, housing ur handlebars, d second views is default, wch must not b
                           //changed suppose u use anoda name lyk template 4d folder, u will use it lyk dz: app.set('template', 'views')
                          
// Middleware for parsing JSON
app.use(express.json());

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')))

app.use(shopRoutes);
// app.use('/admin', adminRoutes);
app.use('/admin', adminData.routes);



app.use((req, res, next)=> {
    res.status(404).render('404', {pageTitle: 'Page Not Found'})    //The second 404 on dz line represents 404.handlebars
})


app.listen(3901, ()=>{
    console.log("app running on 3901");
}) 