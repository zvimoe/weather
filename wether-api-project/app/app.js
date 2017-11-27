'use strict'
var app = angular.module('weather-app', ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl : "home.html"
    })
    .when("/city/:id",{
        templateUrl : "city.html"
    })
})
app.service("getWeather",function($http){

  this.getWheaterByCity = function(city,onSucsses,onError) {
        $http({
            method :'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather',
            params: {
                q: city,
                appid: '68ae87e1e583e3f9f5237320637009eb',
                units:'metric'
            }
        }).then(onSucsses,onError)
    }
   
    });






