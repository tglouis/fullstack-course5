(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchEntry = "";
  $scope.lunchMessage = "";

  $scope.checkLunch = function() {
    var lunchItemsEntry = $scope.lunchEntry;
    var lunchItems = lunchItemsEntry.split(',').filter(item => item != "");
    var lunchItemCount = lunchItems.length;
    console.log(lunchItems);

    if (lunchItemCount == 0) {
      $scope.lunchMessage = "Please enter data first";
    }
    else if (lunchItemCount > 3) {
      $scope.lunchMessage = "Too much!";
    }
    else {
      $scope.lunchMessage = "Enjoy!";
    }
  };
}

})();
