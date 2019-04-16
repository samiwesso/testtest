

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
})


.controller("tablerowController", function($rootScope, $http) {
    
    const starsTotal = 5;

    $http.get("http://localhost:5000/api/products")
    

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


.controller("tablcolumnController", function($rootScope, $http) {
    

    const starsTotal = 5;

    $http.get("http://localhost:5000/api/products")
    
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

})



