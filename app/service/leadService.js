var app = angular.module('pianoTuning')
app.service("leadService", function(fb, $firebaseObject){

	this.newLead = function(){
		return new Firebase(fb.url + '/leads');
	}

});