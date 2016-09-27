/**
 * Created by kelvinguyen on 9/26/2016.
 */
// Code goes here
(function() {
    var app = angular.module("githubViewer");

    var UserController = function($scope, github,$routeParam) {

        var onUserComplete = function(data)
        {
            $scope.user = data;
            github.getRepos($scope.user)
                .then(onRepos, onError);
        }
        var onError = function() {
            $scope.error = "could not fetch the data";
        };

        var onRepos = function(data) {
            $scope.repos = data;
        }

        var onUserComplete = function(data){
            $scope.gitApi = data;
            github.getRepos($scope.gitApi)
                .then(onRepos, onError);
        };
        $scope.username = $routeParam.username;
        $scope.repoSortOrder = "-stargazers_count";
        github.getUser().then(onUserComplete, onError);

    };


    app.controller("UserController", ["$scope", "github","$routeParam",UserController]);
}());