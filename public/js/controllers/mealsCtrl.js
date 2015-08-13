var app = angular.module('pocketChef');

app.controller('mealsCtrl', function($scope, recipeService){
	$scope.getNewMeal = function() {
		console.log('1st Hello', $scope.meal)
		recipeService.getNewMeal($scope.meal)
		.then(function(response){
			$scope.mealData = response;
			console.log('hello', $scope.mealData)
		})
			.catch(function(err){
				throw new Error(err);
			})
		}
});

	// app.controller('userCtrl', function($scope, recipeService){
  //   $scope.email
	// });
