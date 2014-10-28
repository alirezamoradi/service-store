angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {

    var routeRoleChecks = {
        admin: {auth: function(mvAuth){
                return mvAuth.authorizeCurrentUserForRoute('admin')
            }},
        user: {auth: function(mvAuth){
            return mvAuth.authorizeAuthenticatedUserForRoute()
        }}
    }

    $routeProvider
        .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
        .when('/admin/users', { templateUrl: '/partials/admin/user-list',
            controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
        })
        .when('/signup', { templateUrl: '/partials/account/signup',
            controller: 'mvSignupCtrl'
        })
        .when('/profile', { templateUrl: '/partials/account/profile',
            controller: 'mvProfileCtrl', resole: routeRoleChecks.user
        })
        .when('/new-annonce', { templateUrl: '/partials/annonces/annonce-form',
            controller: 'mvNewAnnonceCtrl'
        })
        .when('/annonces', { templateUrl: '/partials/annonces/annonce-list',
            controller: 'mvAnnonceListCtrl'
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