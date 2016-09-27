// Code goes here
(function() {
    var app = angular.module("githubViewer");

    var MainController = function($scope, $interval,$location) {
        var decrementCountDown = function() {
            $scope.count -= 1;
            if ($scope.count < 1) {
                $scope.search($scope.username);
            }
        };

        var countdownInterval = null;
        var startCountDown = function() {
            countdownInterval = $interval(decrementCountDown, 1000,$scope.count);
        };

        $scope.search = function(username) {
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.count = null;
            }
            $location.path("/user/"+username);
        };

        $scope.count = 5;
        $scope.username = "angular";
        startCountDown();
    };

    app.controller("MainController", ["$scope","$interval","$location" ,MainController]);
}());