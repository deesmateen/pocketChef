var app = angular.module('pocketChef');

app.controller('favsCtrl', function($scope, recipeService){
	$scope.getRandomImages = function(images){
		console.log(images, 'first images');
		recipeService.getRandomImages(images).then(function(data){
			console.log('Last images', data);
		});
	};


	recipeService.getUserFavs().then(function(data) {
		console.log(data)
		$scope.favorites = data.favorites;
	});
});


// ng-href to construct a url
