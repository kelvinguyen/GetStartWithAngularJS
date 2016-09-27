/**
 * Created by kelvinguyen on 9/26/2016.
 */
(function(){
    var github = function($http){
        var responseObject = function(response){
          return response.data;
        };

        var errorObject = function(){
            alert("can't get repo");
        };

        var getuser = function(){
            return $http.get("https://api.github.com/users/robconery")
                .then(responseObject,errorObject);
        };

        var getRepos = function(user){
            return $http.get(user.repos_url).then(responseObject,errorObject);
        };
        return {
            getUser : getuser,
            getRepos : getRepos
        };
    };


   var module = angular.module("githubViewer");
    module.factory("github",github);
}());