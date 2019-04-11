
product = [
    { imagebook: "image/t-shirt/Helix-Colorful-T-Shirt.jpg", productname: "Helix Colorful T-Shirt", price: 100 ,rating: 2.5, totalratings: 5 },
    { imagebook: "image/t-shirt/Helix-white-T-Shirt.jpeg", productname: "Helix  white T-Shirt", price: 110 , rating: 3.5, totalratings: 12 },
    { imagebook: "image/t-shirt/Helix-black-T-Shirt.jpeg", productname: "Helix  black T-Shirt", price: 50 , rating: 2.5, totalratings: 7 },
    { imagebook: "image/t-shirt/Helix-gry-T-Shirt.jpeg", productname: "Helix  gry T-Shirt", price: 80 , rating: 3.5, totalratings: 5 },
    { imagebook: "image/t-shirt/Helix-yellow-T-Shirt.jpeg", productname: "Helix  yellow T-Shirt", price: 600 ,rating: 2.5, totalratings: 3 },
    { imagebook: "image/t-shirt/Helix-orang-T-Shirt.jpeg", productname: "Helix  orang T-Shirt", price: 40 , rating: 3.5, totalratings: 5 },
    { imagebook: "image/t-shirt/Helix-red-T-Shirt.jpeg", productname: "Helix  red T-Shirt", price: 90 , rating: 2.5, totalratings: 0 },
    { imagebook: "image/t-shirt/Helix-brown-T-Shirt.jpeg", productname: "Helix  brown T-Shirt", price: 88 , rating: 3.5, totalratings: 5 },
    { imagebook: "image/t-shirt/Helix-purple-T-Shirt.jpeg", productname: "Helix  purple T-Shirt", price: 35 , rating: 2.5, totalratings: 5 },
    { imagebook: "image/t-shirt/Helix-white-black-T-Shirt.jpeg", productname: "Helix  white/black T-Shirt", price: 450 , rating: 3.5, totalratings: 5 },
    { imagebook: "image/t-shirt/Helix-colors-T-Shirt.jpeg", productname: "Helix  colors T-Shirt", price: 55 , rating: 2.5, totalratings: 5 },
    { imagebook: "image/t-shirt/Helix-yelloww-T-Shirt.jpeg", productname: "Helix  yelloww T-Shirt", price: 510 , rating: 3.5,totalratings: 5 }
];

var app = angular.module("angularApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider

    .when("/", {
        templateUrl: "view/tablerows.html",
        controller: "tablerowController" 
    })

    .when("/tablerow", {
        templateUrl: "view/tablerows.html",
        controller: "tablerowController" 
    })

    .when("/tablcolumn", {
        templateUrl: "view/tablecolumn.html",
        controller: "tablcolumnController" 
    })
});


app.controller("tablerowController", function($rootScope) {
    $rootScope.namelist = product
    const starsTotal = 5;

    $rootScope.rating = function(input) {
    return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
    }
    // $scope.rowLimits = "10 selected";
    $rootScope.rowLimits = {
        "type":"select",
        "name":"rowLimits",
        "value":"5",
        "values":["5","10","20","50","100"]
    };
    $(window).scroll(function() {
        let topPosition = $(this).scrollTop();
    
        console.log(topPosition);
    
        if(topPosition > 100) {
            $(".scrollTop").css("opacity","1");
        } else {
            $(".scrollTop").css("opacity","0");
        }
    })


})


.controller("tablcolumnController", function($rootScope) {
    $rootScope.namelist = product

    const starsTotal = 5;

    $rootScope.rating = function(input) {
        return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
    }
     // $scope.namelist = namelist;
    //  $scope.rowLimits = "10 selected";
     // $scope.sortColumn = "productname";

     $rootScope.rowLimits = {
        "type":"select",
        "name":"rowLimits",
        "value":"5",
        "values":["5","10","20","50","100"]
    };
    $(window).scroll(function() {
        let topPosition = $(this).scrollTop();
    
        console.log(topPosition);
    
        if(topPosition > 100) {
            $(".scrollTop").css("opacity","1");
        } else {
            $(".scrollTop").css("opacity","0");
        }
    })

})



