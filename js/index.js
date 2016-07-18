var app =angular.module('App', [])

app.controller('controller1', ['$scope', function($scope) {

 $scope.users = [
   { id: 1, name: "白石麻衣", score: 80 },
   { id: 2, name: "松村沙友理", score: 90 },
   { id: 3, name: "秋元真夏", score: 100 },
   { id: 4, name: "西野七瀬", score: 95 },
   { id: 5, name: "若月佑美", score: 85 },
 ];

}]);

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

app.controller('controller2', ['$scope', function($scope) {

  modalBody = $('#modalBody')
  modal = $('#modal')

  // window.controller2 = ($scope) ->
  //   $scope.show = () ->
  //     modalBoday.html($scope.u)


}]);
