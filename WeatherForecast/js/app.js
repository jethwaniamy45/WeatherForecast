'use strict';

define(['angular'], function() {
    return angular.module('myApp', [
        'ngRoute',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers',
        'fix/test1',
        'fix/test2'
    ]);
});
//test1fix