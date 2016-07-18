angular.module('App', []).controller('controller1', ['$scope', function($scope) {

 $scope.users = [
   { id: 1, name: "白石麻衣", score: 80 },
   { id: 2, name: "松村沙友理", score: 90 },
   { id: 3, name: "秋元真夏", score: 100 },
 ];

}]);
