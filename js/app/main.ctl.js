// index.html
app.controller('MainController', ['$scope', '$http', '$sce',
    function($scope, $http, $sce) {
        // aboutme
        $scope.loadAboutMe = function(){
            $http.get('/json/aboutme.json').success(function(data) {
                $scope.aboutme = angular.copy(data[0]);
                // console.log($scope.aboutme);
            });
        }
        // experience
        $scope.loadExperience = function(){
            $http.get('/json/experience.json').success(function(data) {
                $scope.experience = angular.copy(data[0]);
                // console.log($scope.experience);
            });
        }
        // portfolio
        $scope.loadPortfolio = function(){
            $http.get('/json/portfolio.json').success(function(data) {
                $scope.portfolio = angular.copy(data[0]);
                // console.log($scope.portfolio);
            });
        }
        // contact
        $scope.loadContact = function(){
            $http.get('/json/contact.json').success(function(data) {
                $scope.contact = angular.copy(data[0]);
                // console.log($scope.contact);
            });
        }
        $scope._init = function(){
            $scope.loadAboutMe();
            $scope.loadExperience();
            $scope.loadPortfolio();
            $scope.loadContact();
        }

        $scope._init();

    }
]);