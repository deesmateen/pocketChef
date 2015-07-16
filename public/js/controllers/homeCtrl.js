var app = angular.module('pocketChef');

	app.controller('homeCtrl', function($scope, recipeService){
		$scope.createUser = function(email, password){
			console.log(email, password)
			recipeService.createUser(email, password).then(function(data){
				console.log(data, 'hello homectrl')
			})
		}
	});
