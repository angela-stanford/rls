'use strict';

cs142App.controller('GalleryController', ['$scope', '$routeParams',
    function ($scope, $routeParams) {
        $scope.gallery = {};
        $scope.gallery.getRepeat = function(rep) {
            return new Array(rep);
        };
        $scope.gallery.grid = false;
        $scope.gallery.numImages = 45;
        $scope.gallery.curr = Math.floor(Math.random() * 4 + 1);
        $scope.gallery.left = 1;
        $scope.gallery.direction = 'down';
        $scope.gallery.forward = function (event) {
            event.stopPropagation();
            if(event.handled !== true) {
                event.handled = true;
            }
            if($scope.gallery.curr === $scope.gallery.numImages) {
                $scope.gallery.curr = 1;
                $scope.gallery.left = 1;
            } else {
                if($scope.gallery.curr % 5 === 0) {
                    $scope.gallery.left = $scope.gallery.curr + 1;
                }
                $scope.gallery.curr++;
            }

        };

        $scope.gallery.back = function (event) {
            event.stopPropagation();
            if($scope.gallery.curr === 1) {
                $scope.gallery.curr = $scope.gallery.numImages;
                $scope.gallery.left = $scope.gallery.numImages - 4;
            } else {
                if($scope.gallery.curr % 5 === 1) {
                    $scope.gallery.left = $scope.gallery.curr - 5;
                }
                $scope.gallery.curr--;
            }
        };

        $scope.gallery.thumbForward = function () {
            if($scope.gallery.left === $scope.gallery.numImages - 4) {
                $scope.gallery.left = 1;
            } else {
                $scope.gallery.left+= 5;
            }
        };

        $scope.gallery.thumbBack = function () {
            if($scope.gallery.left === 1) {
                $scope.gallery.left = $scope.gallery.numImages - 4;
            } else {
                $scope.gallery.left-= 5;
            }
        };

        $scope.gallery.switch = function (num) {
            $scope.gallery.curr = num;
        };

        $scope.gallery.hide = function () {
            if($scope.gallery.direction === 'down') {
                $scope.gallery.direction = 'up';
                $('.gallery-thumbnail-container').hide();
                $('.gallery-wrapper').addClass('gallery-wrapper-post');
            } else {
                $scope.gallery.direction = 'down';
                $('.gallery-thumbnail-container').show();
                $('.gallery-wrapper').removeClass('gallery-wrapper-post');
            }
        };

        $scope.gallery.toggleGrid = function () {
            $scope.gallery.grid = !$scope.gallery.grid;
            if(!$scope.gallery.grid) {
                $('#gallery-grid').fadeOut();
                $('#gallery-page').fadeIn();
            } else {
                $('#gallery-page').fadeOut();
                $('#gallery-grid').fadeIn();
            }
        };

        $scope.gallery.goToImage = function (num) {
            $scope.gallery.toggleGrid();
            $scope.gallery.switch(num);
            var mod = num % 5 === 0 ? 5 : num % 5;
            $scope.gallery.left = $scope.gallery.curr - mod + 1
        };
    }]);
