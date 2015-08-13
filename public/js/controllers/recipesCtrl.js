var app = angular.module('pocketChef');

app.controller('recipesCtrl', function($scope, recipeService){
  $scope.getNewRecipe = function () {
		console.log('Derek', $scope.ingredients);
    recipeService.getNewRecipe($scope.ingredients)
    .then(function(response){
      $scope.recipeData = response;
			console.log($scope.recipeData);
      // $scope.addRecipe();
    })
    .catch(function(err) {
      throw new Error(err);
    });
  };


  $scope.addRecipe = function() {
    return recipeService.postRecipe($scope.recipeData).then(function(response){
      console.log('Add recipe');
    });
  };
  // $scope.addFavorites
  // http post

  // MODAL CODE
  $('.modal-trigger').leanModal();

  $scope.openModal = function (activeRecipe) {
    $('#modal1').openModal();
    $scope.activeRecipe = activeRecipe;
  };

  $scope.addToUserFavs = function (recId) {
    var tempArray = recId.split("/");
    var id = tempArray[tempArray.length - 1];
    console.log(id);
    recipeService.addToUserFavs(id);
    console.info(id);
  };

});
