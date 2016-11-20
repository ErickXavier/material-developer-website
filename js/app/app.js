// The App itself, here we put all Directives and Services as well
var app = angular.module('MaterialApp', [])
.filter('html', [
    '$sce',
    function($sce) {
        return function(value, type) {
            // Defaults to treating trusted text as `html`
            return $sce.trustAs(type || 'html', value);
        }
    }
]);