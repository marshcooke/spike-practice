var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('BreweryController', function ($http) {
    var vm = this;
    vm.info = { list: [] };
    vm.getInfo = function () {
        $http({
            method: 'GET',
            url: '/'
        }).then(function (response) {
            console.log('Received', response);
            vm.info.list = response.data.data;
            console.log(vm.info.list);
        });
    }

    vm.getInfo();
});
