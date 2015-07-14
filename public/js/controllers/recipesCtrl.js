var app = angular.module('pocketChef');

app.controller('recipesCtrl', function($scope, recipeService){
  $scope.getRecipe = function () {
		// console.log('hello', $scope.ingredients);
    recipeService.getRecipe($scope.ingredients)
    .then(function(response){
      $scope.recipeData = response;
			console.log($scope.recipeData)
      // $scope.addRecipe();
    })
    .catch(function(err) {
      throw new Error(err);
    });
  }


  $scope.addRecipe = function() {
    return recipeService.postRecipe($scope.recipeData).then(function(response){
      console.log('Add recipe')
    })
  }
  // $scope.addFavorites
  // http post
})
