angular.module('greatStartApp')
    .controller('InvestmentController', function ($scope, $location, Investment) {

        $scope.getAllInvestments = function () {
            var investments = Investment.query({}, function () {
                $scope.investments = investments;
            });
        };

        $scope.createInvestment = function () {
            $scope.investment.investor = $scope.currentUser;
            $scope.investment.investor.photo = null;
            $scope.investment.investor.dtoInvestments = null;
            $scope.investment.investor.projects = null;
            $scope.investment.project = $scope.project;
            $scope.investment.project.image = null;
            $scope.investment.project.dtoInvestments = null;
            $scope.investment.verified = false;
            $scope.investment.paid = false;
            $scope.investment.dateOfInvestment = null;
            console.log('Saving New Investment: ', $scope.investment);
            Investment.save($scope.investment, function () {
                console.log('Investment saved', $scope.investment);
                $location.path('/project/' + $scope.project.id);
            }, function (error) {
                $scope.error = true;
            });
            $scope.closeInvestmentModal();
        };

        $scope.verifyInvestment = function (investment) {
            // Investment.save({id: id});
            //todo update verified investment field
        };

        $scope.payInvestment = function (investment) {
            // Investment.save({id: id});
            //todo update paid investment field
        };

        $scope.deleteInvestment = function (id) {
            Investment.delete({id: id});
            location.reload();
        };

        $scope.closeInvestmentModal = function () {
            $scope.investmentModal.dismiss();
        };

        $scope.closeApproveModal = function () {
            $scope.projectModal.dismiss();
        };
    });