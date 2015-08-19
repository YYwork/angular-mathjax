var mathj = angular.module('mathj', [

]);

mathj.controller('mathjaxController', mathjaxController);

function mathjaxController($scope) {
  $scope.math = "\$a\$<latex>a<latex inline>aa</latex></latex>\\(b\\)\$\$c\$\$";
}
