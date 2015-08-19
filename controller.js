var mathj = angular.module('mathj', [

]);

mathj.controller('mathjaxController', mathjaxController);

function mathjaxController($scope) {
  $scope.math = "$a$";
}
