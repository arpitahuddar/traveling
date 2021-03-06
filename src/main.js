
var main = (function () {
    // Create and add our cities
    var city = new City(60, 200, 'City-A');
    TourManager.addCity(city);
    var city2 = new City(180, 200, 'City-B');
    TourManager.addCity(city2);
    var city3 = new City(80, 180, 'City-C');
    TourManager.addCity(city3);
    var city4 = new City(140, 180, 'City-D');
    TourManager.addCity(city4);
    var city5 = new City(20, 160, 'City-E');
    TourManager.addCity(city5);
    var city6 = new City(100, 160, 'City-F');
    TourManager.addCity(city6);
    var city7 = new City(200, 160, 'City-G');
    TourManager.addCity(city7);
    var city8 = new City(140, 140, 'City-H');
    TourManager.addCity(city8);
    var city9 = new City(40, 120, 'City-I');
    TourManager.addCity(city9);
    var city10 = new City(100, 120, 'City-J');
    TourManager.addCity(city10);
    // var city11 = new City(180, 100, 'City-K');
    // TourManager.addCity(city11);
    // var city12 = new City(60, 80, 'City-L');
    // TourManager.addCity(city12);
    // var city13 = new City(120, 80, 'City-M');
    // TourManager.addCity(city13);
    // var city14 = new City(180, 60, 'City-N');
    // TourManager.addCity(city14);
    // var city15 = new City(20, 40, 'City-O');
    // TourManager.addCity(city15);
    // var city16 = new City(100, 40, 'City-P');
    // TourManager.addCity(city16);
    // var city17 = new City(200, 40, 'City-Q');
    // TourManager.addCity(city17);
    // var city18 = new City(20, 20, 'City-R');
    // TourManager.addCity(city18);
    // var city19 = new City(60, 20, 'City-S');
    // TourManager.addCity(city19);
    // var city20 = new City(160, 20, 'City-T');
    // TourManager.addCity(city20);

    // Initialize population
    var pop = new Population(50, true);
    console.log(`Initial distance: ${pop.getFittest().getDistance()}`);

    // Evolve population for 100 generations
    pop = GA.evolvePopulation(pop);
    for (var i = 0; i < 100; i++) {
        pop = GA.evolvePopulation(pop);
    }


    // Print final results
    console.log("Finished");
    console.log(`Final distance: ${pop.getFittest().getDistance()}`);
    console.log("Solution:");
    console.log(pop.getFittest().toString());

    return {
        pop: function () {
            return pop;
        }
    };

})();








// var city1 = new City(100,150);
// var city2 = new City(150,160);
// var city3 = new City(160,170);
// var city4 = new City(170,180);
// var city5 = new City(180,190);

// console.table([city1]);
// console.log(city.toString());

// TourManager.addCity(city1);
// TourManager.addCity(city2);
// TourManager.addCity(city3);
// TourManager.addCity(city4);
// TourManager.addCity(city5);
// console.log("TourManager:",TourManager.getCity(0));

