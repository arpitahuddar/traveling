
function GA() {
}
GA.mutationRate = 0.015;
GA.tournamentSize = 5;
GA.elitism = true;

GA.evolvePopulation = function (pop) {
    var newPopulation = new Population(pop.populationSize(), false);
    var elitismOffset = 0;
    //keep best distance if elitism is enabled
    if (GA.elitism) {
        newPopulation.saveTour(0, pop.getFittest());
        elitismOffset = 1;
    }
    //crossover - create new from current population
    for (var i = elitismOffset; i < newPopulation.populationSize(); i++) {
        //select parents
        var parent1 = GA.tournamentSelection(pop);
        var parent2 = GA.tournamentSelection(pop);
        var child = GA.crossover(parent1, parent2);
        newPopulation.saveTour(i, child);
    }
    //mutate the new population
    for (var i = elitismOffset; i < newPopulation.populationSize(); i++) {
        GA.mutate(newPopulation.getTour(i));
    }
    return newPopulation;
}

GA.tournamentSelection = function (pop) {
    var tournament = new Population(GA.tournamentSize, false);
    //get a random tour and add to population
    for (var i = 0; i < GA.tournamentSize; i++) {
        var randomId = Math.floor(Math.random() * pop.populationSize());

        tournament.saveTour(i, pop.getTour(randomId));
    }
    //get the fittest tour from the population
    var fittest = tournament.getFittest();
    return fittest;
}

GA.crossover = function (parent1, parent2) {
    var child = new Tour();
    //get random start and end positions for tours from parent1
    var startPos = Math.floor(Math.random() * parent1.tourSize());
    var endPos = Math.floor(Math.random() * parent1.tourSize());


    //add cities from parent1 tours to child
    for (var i = 0; i < child.tourSize(); i++) {
        // If our start position is less than the end position
        if ((startPos < endPos) && (i > startPos) && (i < endPos)) {
            child.setCity(i, parent1.getCity(i));
        } // If our start position is larger
        else if (startPos > endPos) {
            //i between start and end
            if (!((i < startPos) && (i > endPos))) {
                child.setCity(i, parent1.getCity(i));
            }
        }
    }

    // fill in gaps from parent2 tour
    for (var i = 0; i < parent2.tourSize(); i++) {
        // If child doesn't have the city add it
        if (!child.containsCity(parent2.getCity(i))) {
            // Loop to find a spare position in the child's tour
            for (var ii = 0; ii < child.tourSize(); ii++) {
                // Spare position found, add city
                if (child.getCity(ii) == null) {
                    child.setCity(ii, parent2.getCity(i));
                    break;
                }
            }
        }
    }
    return child;
}

GA.mutate = function (tour) {
    for (var tourPos1 = 0; tourPos1 < tour.tourSize(); tourPos1++) {
        if (Math.random() < GA.mutationRate) {
            var tourPos2 = Math.floor(tour.tourSize() * Math.random());

            // Get the cities at target position in tour
            var city1 = tour.getCity(tourPos1);
            var city2 = tour.getCity(tourPos2);

            // Swap them around
            tour.setCity(tourPos2, city1);
            tour.setCity(tourPos1, city2);
        }
    }
}


