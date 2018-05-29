var app = angular.module('utopia', ['ngRoute', 'angularCSS']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/startpage.html',
        //css: ['css/home.css' , 'css/workarea.css', 'css/table.css']
    }).when('/login', {
        templateUrl: 'partials/login.html',
        css: ['css/login.css']
    }).when('/signup', {
        templateUrl: 'partials/signup.html',
        css: ['css/signup.css']
    }).when('/home', {
        templateUrl: 'partials/home.html',
        css: ['css/home.css', 'css/table.css']
    }).when('/props', {
        templateUrl: 'partials/props.html',
        css: ['css/lineSection.css', 'css/navigation.css']
    }).when('/sys', {
        templateUrl: 'partials/sys.html',
        css: [ 'css/navigation.css']
    }).when('/facilities', {
        templateUrl: 'partials/facilities.html',
        //css: ['css/table.css']
    }).when('/repertoire/:id', {
        templateUrl: 'partials/repertoire.html',
        controller: 'repertoireController'
    }).when('/fastTickets/:id', {
        templateUrl: 'partials/fastReservation.html',
        controller: 'fastReservationController'
    }).when('/ticketReservations/:id', {
        templateUrl: 'partials/ticketReservations.html',
        controller: 'ticketReservationsController'
    }).when('/reservations', {
        templateUrl: 'partials/reservationsList.html',
    }).when('/theaters', {
        templateUrl: 'partials/theaters.html',
    }).when('/cinemas', {
        templateUrl: 'partials/cinemas.html',
    }).when('/friends', {
        templateUrl: 'partials/friends.html',
        css: ['css/friends.css']
    }).when('/profile', {
        templateUrl: 'partials/profile.html',
        css: []
    }).when('/fan_zone_admin',{
        templateUrl: 'partials/fanZoneAdmin.html',
        css: ['css/lineSection.css', 'css/navigation.css']
    }).when('/ads',{
        templateUrl: 'partials/ads.html',
        css: ['css/table.css', 'css/props.css']
    }).when('/usersProjections/:id', {
        templateUrl: 'partials/usersProjections.html',
        controller : 'usersProjectionsController'
        //css: ['css/lineSection.css', 'css/navigation.css']
    }).when('/ads_form',{
        templateUrl: 'partials/adsForm.html',
        css: ['css/lineSection.css', 'css/navigation.css']
    })
    .when('/viewingRooms',{
        templateUrl: 'partials/viewingRooms.html',
    }).when('/report/:id', {
        templateUrl: 'partials/report.html',
        controller: 'reportController'
    })
});



app.config(function($logProvider) {
    $logProvider.debugEnabled(true);
});