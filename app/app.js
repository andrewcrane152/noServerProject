angular.module('pianoTuning', ['ngRoute', 'firebase'])

.constant('fb', {
	url: "https://utahpianotuning.firebaseio.com/"
})

.config(function($routeProvider){  //uiGmapGoogleMapApiProvider
    // uiGmapGoogleMapApiProvider.configure({
    //     //    key: 'your api key',
    //     v: '3.17',
    //     libraries: 'weather,geometry,visualization'
    // });

	$routeProvider
	.when('/intro', {
		templateUrl: 'app/controllers/intro.html',
		controller: 'introCtrl'
	})
	.when('/request', {
		templateUrl: 'app/controllers/request.html',
		controller: 'requestCtrl',
		resolve: {
			requestRef: function(leadService){
				return leadService.newLead();
			}
		}
	})
	.when('/claim', {
		templateUrl: 'app/controllers/claim.html',
		controller: 'claimCtrl',
		resolve: {
			claimRef: function(leadService){
			return leadService.newLead();
			}
		}
	})
	.otherwise({
		redirectTo: '/intro'
	})
})
