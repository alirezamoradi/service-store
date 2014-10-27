angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {

    var routeRoleChecks = {
        admin: {auth: function(mvAuth){
                return mvAuth.authorizeCurrentUserForRoute('admin');
            }
        }
    }

    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
        .when('/admin/users', { templateUrl: '/partials/admin/user-list',
            controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
        })
        .when('/signup', { templateUrl: '/partials/account/signup',
            controller: 'mvSignupCtrl'
        })
        .when('/add-service', { templateUrl: '/partials/input/service-form',
            controller: 'mvServiceInputCtrl'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

});


angular.module('app').run(function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection){
        if(rejection === 'not authorized'){
            $location.path('/');
        }
    })
})