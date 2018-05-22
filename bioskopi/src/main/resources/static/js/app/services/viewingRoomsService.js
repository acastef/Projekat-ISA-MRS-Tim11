(function() {
    'use strict';

    angular
        .module('utopia')
        .factory('viewingRoomsService', viewingRoomsService);

        viewingRoomsService.$inject = ['$http','$routeParams'];
    function viewingRoomsService($http) {
        var service = {};

        // service.getAll = function(){
        //     return $http.get('/facilities/getRepertoires');
        // };

        // service.getByFacilityId = function(data){
        //     return $http.get("/facilities/getRepertoire/" + data);
        // }

        // service.save = function(data){
        //     return $http.put("/projections/save",data);
        // }

        // service.deleteProjection = function(id)
        // {
        //     return $http.put("/projections/delete/" + id);
        // }
        
        service.getSeats = function(data)
        {
            return $http.get("/viewingRooms/getSeatsById/" + data)
        };

        service.getAllVRs = function(){
            return $http.get("/viewingRooms/all");
        }

        service.closeSegment = function(idVR, segment)
        {
            return $http.put("/viewingRooms/closeSegment/" + idVR + "/" + segment);
        }

        service.changeSeats = function(listOfIds, segment)
        {
            return $http.put("/seats/changeSegment/" + segment, listOfIds);
        }

        return service;
    }
})();
