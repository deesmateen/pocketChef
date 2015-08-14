var app = angular.module('pocketChef', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'js/templates/home.html',
		controller: 'homeCtrl'
	})
	.when('/user', {
		templateUrl: 'js/templates/user.html',
		controller: 'userCtrl'
	})

	.when('/recipes', {
		templateUrl: 'js/templates/recipes.html',
		controller: 'recipesCtrl'
	})
	.when('/meals', {
		templateUrl: 'js/templates/meals.html',
		controller: 'mealsCtrl'
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
