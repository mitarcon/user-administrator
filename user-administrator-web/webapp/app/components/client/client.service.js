(function () {
	'use strict';

	angular.module("mitchapp").service("ClientService", Service);

	Service.$inject = ['$http'];

	var url = 'http://localhost:9100/api/v1/';

	function Service($http) {
		return {
			findByFilterAndPage: findByFilterAndPage,
			downloadPdf: downloadPdf,
			changeStatusClient: changeStatusClient
		}

		function findByFilterAndPage(params) {
			var urlQuery = url + 'clients';
			return $http({
				method: 'GET',
				url: urlQuery,
				params: params
			});
		}

		function downloadPdf(params) {
			var urlQuery = url + 'clients/report';
			return $http({
				method: 'GET',
				url: urlQuery,
				headers: {
					'Content-type': 'application/json'
				},
				responseType: 'arraybuffer',
				params: params
			});
		}

		function changeStatusClient(idUser, data) {
			var urlQuery = url + 'clients/' + idUser + '/status';
			return $http({
				method: 'POST',
				url: urlQuery,
				data: data
			});
		}
	}

})();
