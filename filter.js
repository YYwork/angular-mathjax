var mathj = angular.module('mathj');

mathj.filter('mathjaxFilter', mathjaxFilter);

function mathjaxFilter() {
  return function(input) {
    // var imgReg = /^<img[^<>]*?id=['\"]?(.*?)['\"].*?>$/;
    // var reg = input.match(imgReg);
    // html 标签解析
    if (input) {
      input = input.replace(/<bold\s*>/g, "<span class=\"text bold\">").replace(/<\/bold\s*>/g, "</span>");
      input = input.replace(/<italic\s*>/g, "<span class=\"text italic\">").replace(/<\/italic\s*>/g, "</span>");
      input = input.replace(/<underscore\s*>/g, "<span class=\"text underscore\">").replace(/<\/underscore\s*>/g, "</span>");

      // html 占位符
      input = input.replace(/<option\s*\/>/g, "<span class=\"placeholder option\" data-index=\"\">1</span>");
      input = input.replace(/<blank\s*\/>/g, "<span class=\"placeholder blank\" data-index=\"\">&nbsp;</span>");
      input = input.replace(/<bracket\s*\/>/g, "<span class=\"placeholder bracket\" data-index=\"\">(&nbsp;)</span>");

      // latex 解析
      // 多标签嵌套 解析为一个标签 \(\)
      input = input.replace(/<latex[\w\"\'\s]*><\/\s*latex\s*>/g, "");
      input = input.replace(/<latex\s*inline\s*>/g, "<div class=\"latex-inline\">\$").replace(/<latex\s*>/g, "<div class=\"latex-line\">\$").replace(/<\/latex\s*>/g, "\$</div>");

      return input;
    }
  }
};
