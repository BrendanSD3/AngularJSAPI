var testApp = angular.module("testApp", []);

testApp.controller("testController", function($scope, $http) {
    $scope.home = "This is the homepage";
    $scope.driversList = [];
    $scope.constructorsList = [];
    $scope.years = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];
    $scope.leaders="";
    $scope.LeadDriver="";

   


    //    Our GET request function
    $scope.getRequest = function() {
        console.log("I've been pressed!");
        $http.get("https://ergast.com/api/f1/current/next.json").then(
            function successCallback(result) {
                $scope.seasonData = result.data;
                $scope.season = result.data.MRData.RaceTable.season;
                $scope.round = result.data.MRData.RaceTable.round;
                $scope.racename = result.data.MRData.RaceTable.Races[0].raceName;
                $scope.date = result.data.MRData.RaceTable.Races[0].date;
                $scope.time = result.data.MRData.RaceTable.Races[0].time;
                $scope.circuit = result.data.MRData.RaceTable.Races[0].Circuit.circuitName;
                $scope.locality = result.data.MRData.RaceTable.Races[0].locality;
                //console.log("Racename" + $scope.circuit)
                //console.log("Response" + result.data.MRData.RaceTable.season);
            },
            function errorCallback(response) {
                console.log("Unable to perform get request");
            }
        );
    };
    $scope.change1 = function() {
        document.getElementById("season").style.color = "red";

    };
    $scope.change = function() {
        document.getElementById("season").style.color = "black";

    };
    $scope.getDrivers = function(year) {
        $http.get("https://ergast.com/api/f1/" + year + "/driverStandings.json").then(
            function successCallback(result) {
                $scope.year = year;
                $scope.driversList = result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                $scope.LeadDriver=result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName;
                
                //$scope.driversList.dataLoaded = true;
                console.log('getDrivers', $scope.driversList);

            },
            function errorCallback(response) {
                console.log("Unable to perform get request");
            }
        );


    };
    $scope.getConstructors = function(year) {
        $http.get("https://ergast.com/api/f1/" + year + "/constructorStandings.json").then(
            function successCallback(result) {
                $scope.Constyear = year;
                $scope.constructorsList = result.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
                $scope.leaders= result.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0].Constructor.constructorId;
                //$scope.driversList.dataLoaded = true;
                console.log('getconstructors', $scope.constructorsList);

            },
            function errorCallback(response) {
                console.log("Unable to perform get request");
            }
        );


    };

    /*  $scope.getRounds = function() {
         console.log("I've been pressed!");
         $http.get("http://ergast.com/api/f1/2019.json").then(
             function successCallback(result) {
                 $scope.seasonData = result.data;

                 console.log(result.data.MRData.RaceTable.Races.length);
                 $scope.races = result.data.MRData.RaceTable.Races.length;
                 $scope.season = result.data.MRData.RaceTable.season;
                 for (var i = 0; i < $scope.races; i++) {
                     $scope.round = result.data.MRData.RaceTable.round;
                     $scope.racename = result.data.MRData.RaceTable.Races[i].raceName;
                     $scope.date = result.data.MRData.RaceTable.Races[i].date;
                     $scope.time = result.data.MRData.RaceTable.Races[i].time;
                     $scope.circuit = result.data.MRData.RaceTable.Races[i].Circuit.circuitName;
                     //console.log("Racename" + $scope.circuit)
                     console.log("Response" + result.data.MRData.RaceTable.Races[i].raceName);
                 }
             },
             function errorCallback(response) {
                 console.log("Unable to perform get request");
             }
         );
     }; */

    //    Our POST request function
    
});
