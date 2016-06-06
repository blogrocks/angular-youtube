var myApp = angular
				.module("myModule", [])
				.controller("myController", function($scope) {
					var employees = [{
						  "gender": "Female",
						  "name": "Helen Williams",
						  "dateOfBirth": "3/14/2016",
						  "salary": "91487.99"
						}, {
						  "gender": "Male",
						  "name": "Larry Bradley",
						  "dateOfBirth": "9/20/2015",
						  "salary": "54395.98"
						}, {
						  "gender": "Female",
						  "name": "Brenda Gutierrez",
						  "dateOfBirth": "3/20/2016",
						  "salary": "77573.46"
						}, {
						  "gender": "Male",
						  "name": "Brian Olson",
						  "dateOfBirth": "11/6/2015",
						  "salary": "79723.67"
						}, {
						  "gender": "Female",
						  "name": "Linda Morgan",
						  "dateOfBirth": "2/16/2016",
						  "salary": "98277.89"
					}];

					$scope.employees = employees;
					$scope.rowLimit = 3;
					$scope.sortColumn = "name";  
					$scope.reverseSort = false;
					$scope.sortData = function(column) {
						$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
						$scope.sortColumn = column;
					};

					$scope.getSortClass = function(column) {
						if ($scope.sortColumn == column) {
							return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
						}

						return '';
					}

				});
