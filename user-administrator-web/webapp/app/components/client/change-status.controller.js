(function () {
	'use strict';

	angular
		.module('mitchapp')
		.controller('ClientChangeStatusController', Controller);

	Controller.$inject = [];

	/* @ngInject */
	function Controller() {

		var vm = this;

		activate();

		function activate() {
			console.log("ente en ClientChangeStatusController");
		}
	}
})();
