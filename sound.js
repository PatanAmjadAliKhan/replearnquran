
require('./bower_components/angular/angular.js');
require('./node_modules/ng-audio/dist/ng-audio.min.js');

var soundApp = angular.module('soundApp',[]);
function TstController($scope){
    $scope.audioFiles =[{alif:'./arabicletters/click.mp3'}
    ];
};