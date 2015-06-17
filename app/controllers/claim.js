angular.module('pianoTuning')
.controller('claimCtrl', function($scope, claimRef, $firebaseArray){

	$scope.leads = $firebaseArray(claimRef);


	$scope.servicesRequested = function(lead){
		if(lead.tuningRequest){
		return "Tuning";
		}
	}

});




// $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };