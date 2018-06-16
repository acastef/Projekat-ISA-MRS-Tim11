(function() {
    'use strict';

    angular
        .module('utopia')
        .controller('viewingRoomsController', viewingRoomsController);

    viewingRoomsController.$inject = ['$scope', '$location', '$routeParams', 'viewingRoomsService'];

    function viewingRoomsController($scope, $location, $routeParams, viewingRoomsService) {
        var vm = this;

        $scope.viewingRooms = [];
        $scope.selectedViewingRoom = {};
        $scope.seats = [];
        $scope.selectedSeats = {};
        $scope.seatsData = { "rows": [{ "rowName": "A", "nodes": [{ "type": 1, "uniqueName": "A1", "displayName": "A1", "selected": 1 }, { "type": 1, "uniqueName": "A2", "displayName": "A2", "selected": 0 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "A4", "displayName": "A4", "selected": 0 }, { "type": 1, "uniqueName": "A5", "displayName": "A5", "selected": 0 }, { "type": 1, "uniqueName": "A6", "displayName": "A6", "selected": 0 }, { "type": 1, "uniqueName": "A7", "displayName": "A7", "selected": 1 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "A9", "displayName": "A9", "selected": 0 }, { "type": 1, "uniqueName": "A10", "displayName": "A10", "selected": 0 }] }, { "rowName": "B", "nodes": [{ "type": 1, "uniqueName": "B1", "displayName": "B1", "selected": 0 }, { "type": 1, "uniqueName": "B2", "displayName": "B2", "selected": 0 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "B4", "displayName": "B4", "selected": 1 }, { "type": 1, "uniqueName": "B5", "displayName": "B5", "selected": 1 }, { "type": 1, "uniqueName": "B6", "displayName": "B6", "selected": 0 }, { "type": 1, "uniqueName": "B7", "displayName": "B7", "selected": 0 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "B9", "displayName": "B9", "selected": 0 }, { "type": 1, "uniqueName": "B10", "displayName": "B10", "selected": 1 }] }, { "rowName": "C", "nodes": [{ "type": 1, "uniqueName": "C1", "displayName": "C1", "selected": 0 }, { "type": 1, "uniqueName": "C2", "displayName": "C2", "selected": 0 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "C4", "displayName": "C4", "selected": 1 }, { "type": 1, "uniqueName": "C5", "displayName": "C5", "selected": 1 }, { "type": 1, "uniqueName": "C6", "displayName": "C6", "selected": 0 }, { "type": 1, "uniqueName": "C7", "displayName": "C7", "selected": 1 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "C9", "displayName": "C9", "selected": 0 }, { "type": 1, "uniqueName": "C10", "displayName": "C10", "selected": 0 }] }, { "rowName": "D", "nodes": [{ "type": 1, "uniqueName": "D1", "displayName": "D1", "selected": 1 }, { "type": 1, "uniqueName": "D2", "displayName": "D2", "selected": 0 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "D4", "displayName": "D4", "selected": 1 }, { "type": 1, "uniqueName": "D5", "displayName": "D5", "selected": 0 }, { "type": 1, "uniqueName": "D6", "displayName": "D6", "selected": 0 }, { "type": 1, "uniqueName": "D7", "displayName": "D7", "selected": 1 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "D9", "displayName": "D9", "selected": 0 }, { "type": 1, "uniqueName": "D10", "displayName": "D10", "selected": 0 }] }, { "rowName": "E", "nodes": [{ "type": 1, "uniqueName": "E1", "displayName": "E1", "selected": 1 }, { "type": 1, "uniqueName": "E2", "displayName": "E2", "selected": 1 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "E4", "displayName": "E4", "selected": 0 }, { "type": 1, "uniqueName": "E5", "displayName": "E5", "selected": 1 }, { "type": 1, "uniqueName": "E6", "displayName": "E6", "selected": 1 }, { "type": 1, "uniqueName": "E7", "displayName": "E7", "selected": 0 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "E9", "displayName": "E9", "selected": 0 }, { "type": 1, "uniqueName": "E10", "displayName": "E10", "selected": 1 }] }, { "rowName": "F", "nodes": [{ "type": 1, "uniqueName": "F1", "displayName": "F1", "selected": 0 }, { "type": 1, "uniqueName": "F2", "displayName": "F2", "selected": 0 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "F4", "displayName": "F4", "selected": 1 }, { "type": 1, "uniqueName": "F5", "displayName": "F5", "selected": 0 }, { "type": 1, "uniqueName": "F6", "displayName": "F6", "selected": 0 }, { "type": 1, "uniqueName": "F7", "displayName": "F7", "selected": 0 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "F9", "displayName": "F9", "selected": 0 }, { "type": 1, "uniqueName": "F10", "displayName": "F10", "selected": 1 }] }, { "rowName": "G", "nodes": [{ "type": 1, "uniqueName": "G1", "displayName": "G1", "selected": 0 }, { "type": 1, "uniqueName": "G2", "displayName": "G2", "selected": 0 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "G4", "displayName": "G4", "selected": 1 }, { "type": 1, "uniqueName": "G5", "displayName": "G5", "selected": 0 }, { "type": 1, "uniqueName": "G6", "displayName": "G6", "selected": 0 }, { "type": 1, "uniqueName": "G7", "displayName": "G7", "selected": 1 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "G9", "displayName": "G9", "selected": 0 }, { "type": 1, "uniqueName": "G10", "displayName": "G10", "selected": 1 }] }, { "rowName": "H", "nodes": [{ "type": 1, "uniqueName": "H1", "displayName": "H1", "selected": 0 }, { "type": 1, "uniqueName": "H2", "displayName": "H2", "selected": 0 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "H4", "displayName": "H4", "selected": 1 }, { "type": 1, "uniqueName": "H5", "displayName": "H5", "selected": 0 }, { "type": 1, "uniqueName": "H6", "displayName": "H6", "selected": 0 }, { "type": 1, "uniqueName": "H7", "displayName": "H7", "selected": 1 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "H9", "displayName": "H9", "selected": 1 }, { "type": 1, "uniqueName": "H10", "displayName": "H10", "selected": 0 }] }, { "rowName": "I", "nodes": [{ "type": 1, "uniqueName": "I1", "displayName": "I1", "selected": 0 }, { "type": 1, "uniqueName": "I2", "displayName": "I2", "selected": 1 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "I4", "displayName": "I4", "selected": 1 }, { "type": 1, "uniqueName": "I5", "displayName": "I5", "selected": 0 }, { "type": 1, "uniqueName": "I6", "displayName": "I6", "selected": 0 }, { "type": 1, "uniqueName": "I7", "displayName": "I7", "selected": 0 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "I9", "displayName": "I9", "selected": 0 }, { "type": 1, "uniqueName": "I10", "displayName": "I10", "selected": 0 }] }, { "rowName": "J", "nodes": [{ "type": 1, "uniqueName": "J1", "displayName": "J1", "selected": 0 }, { "type": 1, "uniqueName": "J2", "displayName": "J2", "selected": 1 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "J4", "displayName": "J4", "selected": 0 }, { "type": 1, "uniqueName": "J5", "displayName": "J5", "selected": 1 }, { "type": 1, "uniqueName": "J6", "displayName": "J6", "selected": 1 }, { "type": 1, "uniqueName": "J7", "displayName": "J7", "selected": 0 }, { "type": 0, "uniqueName": null, "displayName": null, "selected": 0 }, { "type": 1, "uniqueName": "J9", "displayName": "J9", "selected": 0 }, { "type": 1, "uniqueName": "J10", "displayName": "J10", "selected": 1 }] }] };


        $scope.hideVIP = true;
        $scope.hideFUN = true;
        $scope.hideNORMAL = true;
        $scope.hideCLOSED = true;
        $scope.hideButtons = true;

        $scope.myStyle = [];
        $scope.myStyle["VIP"] = { color: 'green' };
        $scope.myStyle["FUN"] = { color: 'red' };
        $scope.myStyle["NORMAL"] = { color: 'orange' };
        $scope.myStyle["CLOSED"] = { color: 'grey' };




        activate();

        function activate() {

            viewingRoomsService.getAllVRs().success(function(data, status) {

                $scope.viewingRooms = data;

                for (let i = 0; i < $scope.viewingRooms.length; i++) {
                    //$scope.viewingRooms[i].facility = $scope.facility;
                }

                //$scope.setViewingRoom();

            }).error(function(data, status) {
                toastr.error("Error while getting data", "Error");
            });


        }


        $scope.setViewingRoom = function() {


            $scope.hideVIP = false;
            $scope.hideFUN = false;
            $scope.hideNORMAL = false;
            $scope.hideCLOSED = false;
            $scope.hideButtons = false;

            viewingRoomsService.getSeats($scope.selectedViewingRoom.id).success(function(data, status) {
                $scope.seats = data;

                $scope.numberOfSeats = data.length;

                for (let index = 0; index < $scope.seats.length; index++) {
                    $scope.selectedSeats[$scope.seats[index].id] = false;
                    // if($scope.seats[index].segment == "VIP")
                    //     $scope.myStyle[$scope.seats[index].id] = {color:'green'};
                    // else if($scope.seats[index].segment == "FUN")
                    //     $scope.myStyle[$scope.seats[index].id] = {color:'red'};
                    // else if($scope.seats[index].segment == "NORMAL")
                    //     $scope.myStyle[$scope.seats[index].id] = {color:'orange'};
                    // else
                    //     $scope.myStyle[$scope.seats[index].id] = {color:'grey'};
                }

            }).error(function(data, status) {
                console.log("Error while getting data");
            });

        }


        $scope.closeSeats = function(seatSegment) {
            viewingRoomsService.closeSegment($scope.selectedViewingRoom.id, seatSegment).success(function(data, status) {
                toastr.success("Segment " + seatSegment + " closed");
                for (let index = 0; index < $scope.seats.length; index++) {
                    if ($scope.seats[index].segment == seatSegment)
                        $scope.seats[index].segment = "CLOSED";
                }


            }).error(function(data, status) {
                toastr.error("Error while closing segmnet: " + seatSegment);
            });


        }

        $scope.changeSelected = function(zoneType) {
            var idsToChange = [];

            //adding ids of seats that need to be changed in a list (for rest call)
            for (let index = 0; index < $scope.seats.length; index++) {
                if ($scope.selectedSeats[$scope.seats[index].id]) {
                    idsToChange.push($scope.seats[index].id);

                    // modifying seat segment in memory
                    $scope.seats[index].segment = zoneType;

                    //unchecking seat
                    $scope.selectedSeats[$scope.seats[index].id] = false;
                }
            }

            viewingRoomsService.changeSeats(idsToChange, zoneType).success(function(data, status) {
                toastr.success("seats changed");

            }).error(function(data, status) {
                toastr.error("Error while changing segmnet");
            });

        }
    }
})();