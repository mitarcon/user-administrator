(function () {
	'use strict';

	angular.module("mitchapp").service("ClientService", Service);

	Service.$inject = ['$http'];

	var url = 'http://localhost:9100/api/v1/';

	function Service($http) {
		return {
			findByFilterAndPage: findByFilterAndPage
		}

		function findByFilterAndPage (params) {
			var urlQuery = url + 'clients';
			return $http({
				method: 'GET',
				url: urlQuery,
				params: params
			});
		}
	}

})();
