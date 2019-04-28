const express = require('express');
const route = express.Router();


route.get("/", function(req, res, next) {
    res.status(200).json(
        [
            {id: 1, imagebook: "image/t-shirt/Helix-Colorful-T-Shirt.jpg", productname: "Helix Colorful T-Shirt", price: 100 ,rating: 2.5, totalratings: 5 , quantity: 1},
            {id: 2, imagebook: "image/t-shirt/Helix-white-T-Shirt.jpeg", productname: "Helix  white T-Shirt", price: 110 , rating: 3.5, totalratings: 12 , quantity: 1},
            {id: 3, imagebook: "image/t-shirt/Helix-black-T-Shirt.jpeg", productname: "Helix  black T-Shirt", price: 50 , rating: 2.5, totalratings: 7 , quantity: 1 },
            {id: 4, imagebook: "image/t-shirt/Helix-gry-T-Shirt.jpeg", productname: "Helix  gry T-Shirt", price: 80 , rating: 3.5, totalratings: 5 , quantity: 1 },
            {id: 5, imagebook: "image/t-shirt/Helix-yellow-T-Shirt.jpeg", productname: "Helix  yellow T-Shirt", price: 600 ,rating: 2.5, totalratings: 3 , quantity: 1},
            {id: 6, imagebook: "image/t-shirt/Helix-orang-T-Shirt.jpeg", productname: "Helix  orang T-Shirt", price: 40 , rating: 3.5, totalratings: 5 , quantity: 1 },
            {id: 7, imagebook: "image/t-shirt/Helix-red-T-Shirt.jpeg", productname: "Helix  red T-Shirt", price: 90 , rating: 2.5, totalratings: 2  , quantity: 1},
            {id: 8, imagebook: "image/t-shirt/Helix-brown-T-Shirt.jpeg", productname: "Helix  brown T-Shirt", price: 88 , rating: 3.5, totalratings: 5, quantity: 1 },
            {id: 9, imagebook: "image/t-shirt/Helix-purple-T-Shirt.jpeg", productname: "Helix  purple T-Shirt", price: 35 , rating: 2.5, totalratings: 5 , quantity: 1},
            {id: 10, imagebook: "image/t-shirt/Helix-white-black-T-Shirt.jpeg", productname: "Helix  white/black T-Shirt", price: 450 , rating: 3.5, totalratings: 5 , quantity: 1 },
            {id: 11, imagebook: "image/t-shirt/Helix-colors-T-Shirt.jpeg", productname: "Helix  colors T-Shirt", price: 55 , rating: 2.5, totalratings: 5 , quantity: 1 },
            {id: 12, imagebook: "image/t-shirt/Helix-yelloww-T-Shirt.jpeg", productname: "Helix  yelloww T-Shirt", price: 510 , rating: 3.5,totalratings: 5 , quantity: 1}
        ]
    );
})

module.exports = route;