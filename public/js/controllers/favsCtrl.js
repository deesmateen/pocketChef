var app = angular.module('pocketChef');

app.controller('favsCtrl', function($scope, recipeService){
	// console.log('Hello Recipe controller')
	// $scope.getRecipe = function(){
	// 	console.log('here recipe', $scope.ingredients)
	// 	recipeService.getRecipe($scope.ingredients).then(function(response){
	// 		$scope.recipeData = response;
	// 		$scope.addRecipe();
	// 		console.log('lame', response)
	// 	});
	// }
	// $scope.addRecipe = function(){
	// 	return recipeService.postRecipe($scope.recipeData).then(function(response){
	// 		console.log(response)
	// 	})
	// }

});
