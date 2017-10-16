var myApp = angular.module('myApp', ['ngRoute', 'ngMap']);

myApp.controller('BreweryController', function ($http) {
    var vm = this;
    vm.info = { list: [] };
    vm.getInfo = function () {
        $http({
            method: 'GET',
            url: '/brewery'
        }).then(function (response) {
            console.log('Received', response);
            vm.info.list = response.data.data;
            console.log(vm.info.list);
        });
    }

    vm.getInfo();
});
