angular.module('pianoTuning')
.controller('introCtrl', function($scope){

	$scope.login = function(user) {
        authObj.$authWithPassword(user).then(function(authData) {
            console.log('login authData', authData);
        }, function(error) {
            alert(error);
        });
    };

});