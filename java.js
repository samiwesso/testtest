

 angular.module("angularApp", ["ngRoute"])
 

.config(function($routeProvider) {
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
    .otherwise({ redirectTo: "/" })
})


.controller("tablerowController", function($rootScope, $http) {
    

    const starsTotal = 5;

    $http.get("http://localhost:5000/api/products").then((res) => $rootScope.namelist = res.data);
    

    $rootScope.rating = function(input) {
    return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
    }
    
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


    $rootScope.cart = [];

    $rootScope.emptycart = "";


    var getProductId = function(namelist, id) {
        return _.find(namelist, function(item) {
            return item.id === id
        });
    };

    $rootScope.addItem = function(item) {
        var found = getProductId($rootScope.cart, item.id);

        if(found) {
            found.quantity += item.quantity;
        }
        else {
            $rootScope.cart.push(angular.copy(item));
        }
    }

    $rootScope.removeItem = function(item) {
        var index = $scope.cart.indexOf(item);
        $rootScope.cart.splice(index, 1);
    }

    $rootScope.getProductCost = function(item) {
        return item.quantity * item.price;
    }

    $rootScope.getProductQuantity = function(item) {
        return item.quantity;
    }

    $rootScope.getTotal = function() {
        var total = _.reduce($rootScope.cart, function(sum, item) {
            return sum + $rootScope.getProductCost(item);
        }, 0);

        if($rootScope.cart.length === 0) {
            $rootScope.emptycart = "Your cart is empty."
        }
        else {
            $rootScope.emptycart = ""
        }   
        return total;
    }

    $rootScope.getQuantity = function() {
        var quantity = _.reduce($rootScope.cart, function(sum, item) {
            return sum + $rootScope.getProductQuantity(item);
        }, 0);

        if(quantity === 0) {
            $rootScope.badgeColor = "badge-secondary"
        } else {
            $rootScope.badgeColor = "badge-danger"
        }


        return quantity;
    }
    



})


.controller("tablcolumnController", function($rootScope, $http, ) {
    
       const starsTotal = 5;

    //$http.get("http://localhost:5000/api/products").then((res) => $rootScope.namelist = res.data);
    $http.get("http://localhost:5000/api/products").then(function (res) { $rootScope.namelist = res.data; })
    
    $rootScope.rating = function(input) {
        return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
    }
    

     $rootScope.rowLimits = {
        "type":"select",
        "name":"rowLimits",
        "value":"5",
        "values":["5","10","20","50","100"]
    };

    // $(window).scroll(function() {
    //     let topPosition = $(this).scrollTop();
    
    //     console.log(topPosition);
    
    //     if(topPosition > 100) {
    //         $(".scrollTop").css("opacity","1");
    //     } else {
    //         $(".scrollTop").css("opacity","0");
    //     }
    // })


    $rootScope.cart = [];
    $rootScope.emptycart = "";

    var getProductId = function(namelist, id) {
        return _.find(namelist, function(item) {
            return item.id === id
        });
    };
    
    $rootScope.addItem = function(item) {
        var found = getProductId($rootScope.cart, item.id);

        if(found) {
            found.quantity += item.quantity;
        }
        else {
            $rootScope.cart.push(angular.copy(item));
        }
    }

    $rootScope.removeItem = function(item) {
        var index = $scope.cart.indexOf(item);
        $rootScope.cart.splice(index, 1);
    }

    $rootScope.getProductCost = function(item) {
        return item.quantity * item.price;
    }

    $rootScope.getProductQuantity = function(item) {
        return item.quantity;
    }

    $rootScope.getTotal = function() {
        var total = _.reduce($rootScope.cart, function(sum, item) {
            return sum + $rootScope.getProductCost(item);
        }, 0);

        if($rootScope.cart.length === 0) {
            $rootScope.emptycart = "Your cart is empty."
        }
        else {
            $rootScope.emptycart = ""
        }   
        return total;
    }

    $rootScope.getQuantity = function() {
        var quantity = _.reduce($rootScope.cart, function(sum, item) {
            return sum + $rootScope.getProductQuantity(item);
        }, 0);

        if(quantity === 0) {
            $rootScope.badgeColor = "badge-secondary"
        } else {
            $rootScope.badgeColor = "badge-danger"
        }


        return quantity;
    }

})



