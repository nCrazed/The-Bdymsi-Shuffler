/* global angular*/

var shuffleArray = function(array) {
  'use strict';
  var m = array.length, t, i;

  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

var bdymsApp = angular.module('bdymsApp', []);

bdymsApp.controller('BdymsCtrl', function($scope) {
  'use strict';

  $scope.bdymsi = '';

  $scope.bdyms = function() {
    var bdymsi = $scope.bdymsi.split(' ');
    shuffleArray(bdymsi);
    $scope.bdymsi = bdymsi.join(' ');
  };
});
