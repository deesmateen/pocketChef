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
	this.getRandomImages = function (images){
		var dfd = $q.defer();
		$http({
			method: "GET",
			url: "http://api.bigoven.com/images"
		}).then(function(response){
			console.log('Pics of fooood', response)
			dfd.resolve(response.data)
		});
		return dfd.promise;
	};

	this.createUser = function(email, password){
		var dfd = $q.defer();
				$http({
			method: "POST",
			url: "/api/user/create",
			data: {
				email: email,
				password: password
			}
		}).then(function(response){
			console.log('new user', response)
			dfd.resolve(response.data)
		});
		return dfd.promise;
	};
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
