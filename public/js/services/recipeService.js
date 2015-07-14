var app = angular.module('pocketChef');

app.service('recipeService', function($http, $q){

	this.getRecipe = function(ingredients){
		var ingredients = ingredients.ingredient1 + ',' + ingredients.ingredient2 + ',' + ingredients.ingredient3 + ',' + ingredients.ingredient4 + ',' + ingredients.ingredient5;

		var dfd = $q.defer();

		$http({
			method: "GET",
			url: 'http://api.bigoven.com/recipes?include_ing='  +  ingredients + '&pg=1&rpp=20&api_key=gQstXR865iEkjEehU9n4z7D1Cy1qTtvG'
		})
		.then(function(data){
			console.log('hello', data)
			var newArr = [];
			for(var i = 0; i < data.data.Results.length; i++){
				var newObj = {};
				newObj['Title'] = data.data.Results[i].Title;
				newObj['Cuisine'] = data.data.Results[i].Cuisine;
				newObj['ImageURL'] = data.data.Results[i].ImageURL;
				newObj['YieldNumber'] = data.data.Results[i].YieldNumber;
				newObj['WebURL'] = data.data.Results[i].WebURL;
				newObj['StarRating'] = data.data.Results[i].StarRating;
				newObj['MaxImageSquare'] = data.data.Results[i].MaxImageSquare;
				newObj['ImageURL120'] = data.data.Results[i].ImageURL120
				newArr.push(newObj);
				}
				console.log(newArr)
				dfd.resolve(newArr);
			}, function(error){
				console.log(error);
				dfd.reject(error);
			})


		return dfd.promise;
	}
});
	this.postRecipe = function(meal){
		console.log('helloooo')
		return $http({
			method: "POST",
			url: "http://localhost:2020/api/createnewrecipe",
			data: {
				recipe: meal
			}
		})
}
// http post to mongo
	// this.getRecipe = function(ingredients){
	// 	console.log('ingredients', ingredients.ingredient1);
	// 	var dfd = $q.defer();
	// 	$http({
	// 		method: 'GET',
		// 	url: 'http://api.pearson.com:80/kitchen-manager/v1/recipes?ingredients-all=' + "," +  ingredients.ingredient1 + "," + ingredients.ingredient2 + "," + ingredients.ingredient3
		// })
	// 	.then(function(data){
	// 	console.log(data)
		// var newArr = [];
		// for(var i = 0; i < data.data.results.length; i++){
		// 	var newObj = {};
		// 	newObj['Name'] = data.data.results[i].name;
		// 	newObj['Cuisine'] = data.data.results[i].cuisine;
		// 	newObj['Image'] = data.data.results[i].image;
		// 	newObj['CookingMethod'] = data.data.results[i].cooking_method;
		// 	newObj['Url'] = data.data.results[i].url;
		// 	newArr.push(newObj);
		// 	}
		// 	console.log(newArr)
		// 	dfd.resolve(newArr);
		// }, function(error){
		// 	console.log(error);
		// 	dfd.reject(error);
		// })
	//
	// 	return dfd.promise;
	// };
