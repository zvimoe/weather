app.controller("form",function($scope,getWeather,$routeParams){
    if($routeParams.id){
        
          
                getWeather.getWheaterByCity($routeParams.id,onSucsses,onError);
                $scope.city= $routeParams.id
               
           
    }
    else {
        $scope.city = 'jerusalem';
            $scope.showWeather=function(){
                    getWeather.getWheaterByCity($scope.city,onSucsses,onError);  
                    $('#celcius').addClass("wi wi-celsius")  
            }
          
        }
        function onSucsses(res){
        $scope.message = "the temperature in "+ $scope.city+" is"
        $scope.forcast = res.data.main.temp;
        }
        function onError(response){
            console.log('error');
            console.log (response);

        }
});

