'use strict';

// Typecasts controller
angular.module('typecasts').controller('TypecastsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Typecasts',
	function($scope, $stateParams, $location, Authentication, Typecasts ) {
		$scope.authentication = Authentication;

		$scope.permitAdminDirector = function(){
			var allowRoles = ['admin', 'producer/auditions director','talent director'];

			for(var i = 0; i < Authentication.user.roles.length; ++i){
				for(var j = 0; j < allowRoles.length; ++j){
					if(Authentication.user.roles[i] === allowRoles[j]) {
						return true;
					}
				}
			}
		};

		// Create new Typecast
		$scope.create = function() {
			// Create new Typecast object
			var typecast = new Typecasts ({
				name: this.name
			});

			// Redirect after save
			typecast.$save(function(response) {
				$location.path('typecasts/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Typecast
		$scope.remove = function( typecast ) {
			if(confirm('Are you sure?')){
				if ( typecast ) { typecast.$remove();

					for (var i in $scope.typecasts ) {
						if ($scope.typecasts [i] === typecast ) {
							$scope.typecasts.splice(i, 1);
						}
					}
				} else {
					$scope.typecast.$remove(function() {
						$location.path('typecasts');
					});
				}
			}
		};

		// Update existing Typecast
		$scope.update = function() {
			var typecast = $scope.typecast ;

			typecast.$update(function() {
				$location.path('typecasts/' + typecast._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Typecasts
		$scope.find = function() {
			$scope.typecasts = Typecasts.query();
		};

		// Find existing Typecast
		$scope.findOne = function() {
			$scope.typecast = Typecasts.get({ 
				typecastId: $stateParams.typecastId
			});
		};
	}
]);