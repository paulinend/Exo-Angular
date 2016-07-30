var myApp = angular.module("MonApplication", [])
       .controller("MonController", function($scope){
         $scope.envoyer = function(){
           $scope.note = $scope.textarea;
         }
         $scope.effacer = function(){
           $scope.note = "";
         }

       });
