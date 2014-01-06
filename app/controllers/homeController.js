Main.controller('homeController', function($scope, $http) {
   $scope.API = '41becea728ba6323a7402d268b6a5410'; // Your API Key

    $scope.log = function(variable) {
        console.log(variable);
    }
    $scope.alert = function(text) {
        alert(text);
    }

    $scope.add = function(){
      $scope.fetch( $scope.ui, '41becea728ba6323a7402d268b6a5410' );
    }

    $scope.fetch = function( q, apiKey ) {

      $scope.apiKey = apiKey;
      $scope.query = q;
      $scope.url = 'http://api.soundcloud.com/tracks.json?q='+ $scope.query +'&client_id='+$scope.apiKey;

      $http( { method: 'GET', url: $scope.url }).success(function(data, status) {

          console.log(data);
          console.log('OKTRUE');

      }).error(function(data, status) {

          $scope.data = data || "Request failed";
          $scope.status = status;        
          console.log('OKFALSE', $scope.status, data);

      });
    };

});
