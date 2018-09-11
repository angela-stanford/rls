'use strict';

var cs142App = angular.module('cs142App', ['ngRoute', 'ngMaterial']);

cs142App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'components/home/homeTemplate.html',
                controller: 'HomeController'
            }).
            when('/gallery', {
                templateUrl: 'components/gallery/galleryTemplate.html',
                controller: 'GalleryController'
            }).
            when('/photography-studio', {
                templateUrl: 'components/studio/studioTemplate.html',
                controller: 'MainController'
            }).
            when('/contact-us', {
                templateUrl: 'components/contact/contactTemplate.html',
                controller: 'MainController'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);

cs142App.controller('MainController', ['$scope', '$routeParams',
    function ($scope, $routeParams) {
    $scope.main = {};
    $scope.main.showBuy = $routeParams.showBuy;
    $scope.main.buy = function () {
        $scope.main.showBuy = !$scope.main.showBuy;
        event.stopPropagation();
    };
        (function() {

            $('#calendar').fullCalendar({

                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,listYear'
                },

                height: $('body').height() * .90,
                displayEventTime: true,
                googleCalendarApiKey: 'AIzaSyBBx2Sls0NHuMQjXRqTyEMbUz7CawmXBI8',

                events: 'royallanedfw@gmail.com',
            });
        })();
        $("#scroll-studio").on('click', function() {
            var position = $('#about-container').offset().top - $(window).height() * 0.1;
            $("html, body").animate({ scrollTop: position }, 1000);
        });
        $("#scroll-calendar").on('click', function() {
            var position = $('#calendar').offset().top - $(window).height() * 0.1;
            $("html, body").animate({ scrollTop: position }, 1000);
        });

        function get_calendar_height() {
            return $(window).height() * .9;
        }

        $(document).ready(function() {
            $(window).resize(function() {
                $('#calendar').fullCalendar('option', 'height', get_calendar_height());
            });


            //set fullcalendar height property
            $('#calendar').fullCalendar({
                //options
                height: get_calendar_height
            });
        });
    }]);
