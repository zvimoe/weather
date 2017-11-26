'use strict'
var app = angular.module('weather-app', ["ngRoute"]);
app.service("getWeather",function($http){

  
   this.getWheaterByCity = function(city) {
        $http({
            method :'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather',
            params: {
                q: city,
                appid: '',
                units:'metric'
            }
        }).then(function(weather){
            return weather
            
        })
   }
   


});
app.controller("form",function($scope,getWeather){
    $scope.showWeather=function(){
    this.weather = getWeather.getWheaterByCity($scope.city)
     $scope.forcast = this.weather.main.temp;
    }

});




