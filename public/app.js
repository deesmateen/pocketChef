var app = angular.module('pocketChef', ['ngRoute']);

//fireRoot top level of data set in firebase, the url we use to reference.
// app.constant('fireRoot', {
// 	url: "https://pocket-chef.firebaseio.com/"
// })

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'js/templates/home.html',
		controller: 'homeCtrl'
	})
	.when('/recipes', {
		templateUrl: 'js/templates/recipes.html',
		controller: 'recipesCtrl'
	})
	.when('/favs', {
		templateUrl: 'js/templates/favs.html',
		controller: 'favsCtrl',
		// resolve: {
		// 	recipeRef: function(recipeService){
		// 		return recipeService.getRecipe();
		// 	},
		// 	pearsonRecipeRef: function(recipeService){
		// 		console.log('here')
		// 		return recipeService.pearsonRecipe();
		// 	}
		// }
	})
	.otherwise({
		redirectTo: '/home'
	})
})
