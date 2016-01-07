angular.module('starter.controllers', [])

.controller('homeCtrl', function ($scope, $window, $state) {

    $scope.myalert = 'My First Alert!';
    $scope.myfunction = function () {
        // $window.alert(myalert);

        //        $state.go('templates/list.html');
        $state.go('list');
        console.log('fg');
    };

});