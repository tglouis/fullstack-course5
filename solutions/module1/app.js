(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function () {

  function checkLunch($scope) {

    var lunchItemsEntry = $scope.lunchEntry;
    var lunchItems[] = lunchItemsEntry.split(',');
    var lunchItemCount = 0;

    lunchItems.forEach(function(lunchItem){

        if (lunchItem.trim() <> '') {
          lunchItemCount++;
        }
      }
      return lunchItemCount;
    });

  }
});

})();
