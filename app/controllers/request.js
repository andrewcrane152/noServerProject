angular.module('pianoTuning')
.controller('requestCtrl', function($scope, requestRef, $firebaseArray, $firebaseObject){

$scope.leads = $firebaseArray(requestRef);

$scope.createLead = function(){
	$scope.leads.$add($scope.newLead).then(function(lead) {
		var id = lead.key();
		console.log('added lead with id: ', id);
		$scope.leads.$indexFor(id);
		alert("Your request has been submitted.  We will be in touch with you soon.");
	})
}



})