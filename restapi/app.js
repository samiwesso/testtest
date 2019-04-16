const express = require('express');
const app = express();

// CORS - Cross-Origin Resource Sharing
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    
    next();
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    
    next();
});
// http://localhost:port/api/products
const productRoutes = require("./routes/products.js");
app.use("/api/products", productRoutes);


module.exports = app;
