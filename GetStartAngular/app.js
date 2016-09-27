/**
 * Created by kelvinguyen on 9/26/2016.
 */
(function(){

    var app = angular.module("githubViewer",["ngRoute"]);

    var routeFunction = function($routeProvider){
        $routeProvider.when("/main",
            {
                templateUrl : "main.html",
                controller : "MainController"
            })
            .when("/main/:username",
            {
                templateUrl : "userprofile.html",
                controller : "userController"
            })
            .otherwise({redirectTo:"/main"})
    };

    app.config(routeFunction);
}());