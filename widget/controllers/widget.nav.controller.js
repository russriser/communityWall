'use strict';

(function (angular) {
    angular.module('socialPluginWidget')
        .controller('NavCtrl', ['$scope', function ($scope) {
            $scope.plugins = [
                {
                    name: "Community",
                    navIcon: "https://shmoodyimagestore.s3.us-east-2.amazonaws.com/community.svg",
                    instanceId: "fda52552-49fe-4957-a0fc-0b244422a852-1628195548489",
                    position: "leftButton"
                },
                {
                    name: "Home",
                    navIcon: "https://shmoodyimagestore.s3.us-east-2.amazonaws.com/toolkit.svg",
                    instanceId: "b881a182-2a81-44f6-a6b7-321c39b4e602-1626725121187",
                    position: "centerButton"
                },
                {
                    name: "Challenges",
                    navIcon: "https://shmoodyimagestore.s3.us-east-2.amazonaws.com/challenges.svg",
                    instanceId: "ba4139dd-09c6-4121-aa4a-c72570af07fc-1614118652665",
                    position: "rightButton"
                }
            ]
            $scope.navBF = (instanceId) => {
                if (instanceId === "Home") {
                    window.buildfire.navigation.navigateHome();
                } else {
                    window.buildfire.navigation.navigateTo({ instanceId })
                }
            }

        }])
})(window.angular);
