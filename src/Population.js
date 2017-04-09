function Population (populationSize, initialize){
    var default_args = {
        "populationSize" : 0,
        "initialize"     : false
    }
    var options = {};

    if (arguments[0]) options.populationSize = arguments[0];
    if (arguments[1]) options.initialize = arguments[1];
    
    this.tours = new Array(options.populationSize);
    //tours.length = options.populationSize;
    if (options.initialize){
        for (var i=0; i< options.populationSize; i++) {
            var newTour = new Tour();
            newTour.generateIndividual();
            this.saveTour(i, newTour);
        }
    }

}

Population.prototype.saveTour = function(index, tour) {
    this.tours[index] = tour;
}

Population.prototype.getTour = function(index) {
    return this.tours[index];
}

Population.prototype.getFittest = function(){
    var fittest = this.tours[0];
    for (var i=1; i< this.populationSize(); i++){
        if (fittest.getFitness() <= this.getTour(i).getFitness()){
            fittest = this.getTour(i);
        }
    }
    return fittest;
}

Population.prototype.populationSize = function() {
    return this.tours.length;
}
