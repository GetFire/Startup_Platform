angular.module('greatStartApp')
    .controller('MainController',
        ['$location', 'LoginService', '$scope', '$uibModal', '$http', '$rootScope', function ($location, LoginService, $scope, $uibModal, $http, $rootScope) {
            var modalPopup = function () {
                return $scope.modalInstance = $uibModal.open({
                    templateUrl: 'views/main/LoginPage.html',
                    controller: 'LoginController',
                    size: 'md',
                    backdrop: 'static',
                    scope: $scope
                });
            };
// --------------------------------------------------------
            $rootScope.loading=true;
            $rootScope.$on('LOAD', function () {
                $rootScope.loading = true;
            });
            $rootScope.$on('UNLOAD', function () {
                $rootScope.loading = false;
            });
// --------------------------------------------------------
            $scope.openPopup = function () {
                modalPopup().result
                    .then(function () {
                    })
                    .then(null, function () {
                    });
            };

            $scope.logout = function () {
                $http.post('logout', {}).finally(function () {
                    $location.path("/");
                    $rootScope.authenticated = false;
                });
            };

            $scope.forgotPass = function () {
                $scope.modalInstance.dismiss();
                $scope.forgotPassModal = $uibModal.open({
                    templateUrl: 'views/main/ForgotPassword.html',
                    controller: 'PasswordResetController',
                    size: 'sm',
                    backdrop: 'static',
                    scope: $scope
                });
            };

            LoginService.authenticate();
        }]);