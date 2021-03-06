// 'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])

    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.mostRecentReview;
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("txt_placeName").value;
            var searchQuery = document.getElementById("txt_searchFilter").value;
            if (placeEntered != null && placeEntered != "" && searchQuery != null && searchQuery != "") {

                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://api.foursquare.com/v2/venues/search" +
                    "?client_id=G42OGC1VV1GAF5LOA0XZ5KLKOGV1PHMSXV5345CBODUUKN2X" +
                    "&client_secret=E42M5IL5UXXPDKM23IDOEFP2ALU3CBJJBO3FE20VY5OIBRAS" +
                    "&v=20160215&limit=5" +
                    "&near=" + placeEntered +
                    "&query=" + searchQuery);

                handler.success(function (data) {
                    if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {
                        // Tie an array named "venueList" to the scope which is an array of objects.
                        // Each object should have key value pairs where the keys are "name", "id" , "location" and values are their corresponding values from the response
                        // Marks will be distributed between logic, implementation and UI
                        $scope.venueList = [];
                        var venues = data.response.venues;
                        for (var i = 0; i < venues.length; i++) {
                            $scope.venueList.push({ name: venues[i].name, id: venues[i].id, location: venues[i].location,city:venues[i].location.city,country: venues[i].location.country,})
                        }

                    }
                });
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }
    });
