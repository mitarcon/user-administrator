(function () {
	'use strict';

	angular.module("mitchapp").service("LocalizationService", Service);

	Service.$inject = ['$http'];

	var url = 'http://localhost:9100/api/v1/';

	function Service($http) {
		return {
			findAll: findAll
		}

		function findAll() {
			var urlQuery = url + 'localizations';
			return $http({
				method: 'GET',
				url: urlQuery
			});
		}
	}

})();
