(function() {
    'use strict';

    angular
        .module('utopia')
        .factory('adsService', adsService);

    adsService.$inject = ['$http'];
    function adsService($http) {
        var service = {}

        service.getAllActive = function(){
            return $http.get("/ads/all/active");
        }

        service.getAllWait = function(){
            return $http.get("/ads/all/wait");
        }

        service.addAds = function(data){
            return $http.post("/ads/add",data);
        }
        
        service.changeAds = function(data){
            return $http.put("/ads/change",data);
        }

        service.acceptAds = function(data){
            return $http.put("/ads/accept",data);
        }

        service.rejectAds = function(data){
            return $http.put("/ads/reject",data);
        }

        service.deleteAds = function(data){
            return $http.put("/ads/delete",data);
        }

        return service;

    }
})();