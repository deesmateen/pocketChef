var app = angular.module('pocketChef');

	app.controller('homeCtrl', function($scope, recipeService){

		$scope.createUser = function(email, password){
			console.log(email, password);
			recipeService.createUser(email, password).then(function(data){
				console.log(data, 'New user created homectrl');
				$('#modal1').closeModal();

				$scope.email = "";
				$scope.password = "";
			});
		};

		$scope.loginUser = function(email, password){
			recipeService.loginUser(email, password).then(function(data){
				console.log(data, 'User logged in');
				$('#modal1').closeModal();

				$scope.email = "";
				$scope.password = "";
			})
			.catch(function(err){
				console.log(err);
				console.log('You are not a user');
				$scope.password = "";
				Materialize.toast("Wrong username or password", 2500, 'toast-warning');

			});
	};
});

//$location pass it in to the top function .path("/favs") where ever you want them to go
