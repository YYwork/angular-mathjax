var mathj = angular.module('mathj');

mathj.directive('mathjaxBind', mathjaxBind);
mathj.directive('mathjaxDynamic', mathjaxDynamic);

function mathjaxBind() {
  return {
    restrict: 'A',
    scope: {
      text: '@mathjaxBind'
    },
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
      $scope.$watch('text', function(value) {
        var $script = angular.element('<script type="math/tex">')
          .html(value == undefined ? '' : value);
        $element.html('');
        $element.append($script);
        MathJax.Hub.Queue(['Reprocess', MathJax.Hub, $element[0]]);
      });
    }]
  };
}

function mathjaxDynamic($compile) {
  return {
    restrict: 'A',
    replace: true,
    link: function(scope, ele, attrs) {
      scope.$watch(attrs.mathjaxDynamic, function(html) {
        if (html) {
          html = html.replace(/\n/g, '<br />');
          html = html.replace(/\$([^$]+)\$/g, '<span mathjax-bind=\"$1\"></span>');
        } else {
          html = '<span></span>'
        }
        ele.html(html);
        $compile(ele.contents())(scope);
      });
    }
  };
}
