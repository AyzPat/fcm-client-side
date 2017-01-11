'use strict';

angular.module('myApp.view1', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$firebaseArray',function($scope,$firebaseArray) {
  var ref=firebase.database().ref().child('Article');
$scope.articles=$firebaseArray(ref);

$scope.post=function(){
  var title=$scope.article.title;
  var post=$scope.article.name;

$scope.articles.$add({
  title:title,
  post:post
}).then(function(ref){
console.log(ref);
},function(error){
  console.log(error);
})
}

$scope.get=function(){
  $scope.id=true;
}
}]);