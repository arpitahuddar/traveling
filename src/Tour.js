function Tour() {
    this.tour = [];
    this.fitness = 0.;
    this.distance = 0;

    if (arguments[0]) {
        this.tour = arguments[0];
        console.log("tour contstruction:", tour);
    } else {
        for (var i = 0; i < TourManager.numberOfCities(); i++) {
            this.tour.push(null);
        }
    }
}


Tour.prototype.generateIndividual = function () {
    for (var cityIndex = 0; cityIndex < TourManager.numberOfCities(); cityIndex++) {
        this.setCity(cityIndex, TourManager.getCity(cityIndex));
    }
    //console.table(this.tour);
    this.shuffle();
    //console.table(this.tour);
}
// Tour.prototype.shuffle = function () {
//     var j, x, i;

//     for (i = this.tour.length; i; i--) {
//         j = Math.floor(Math.random() * i);

//         x = this.tour[i - 1];
//         this.tour[i - 1] = this.tour[j];
//         this.tour[j] = x;
//     }
// }

//fisher yates shuffle https://bost.ocks.org/mike/shuffle/
Tour.prototype.shuffle = function () {
    var m = this.tour.length, t, i;
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = this.tour[m];
        this.tour[m] = this.tour[i];
        this.tour[i] = t;
    }
}
// function shuffle(array) {
//   var m = array.length, t, i;

//   // While there remain elements to shuffle…
//   while (m) {

//     // Pick a remaining element…
//     i = Math.floor(Math.random() * m--);

//     // And swap it with the current element.
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }

//   return array;
// }

Tour.prototype.getCity = function (tourPosition) {
    return this.tour[tourPosition];
}

Tour.prototype.setCity = function (tourPosition, city) {
    this.tour[tourPosition] = city;
    this.fitness = 0.;
    this.distance = 0;
}

Tour.prototype.getFitness = function () {
    if (this.fitness == 0) {
        this.fitness = 1 / this.getDistance();
    }
    return this.fitness;
}

Tour.prototype.getDistance = function () {
    //console.log("getDistance",this.tour)
    if (this.distance == 0) {
        var tourDistance = 0;
        for (var cityIndex = 0; cityIndex < this.tourSize(); cityIndex++) {
            var fromCity = this.getCity(cityIndex);
            var destinationCity;
            //if at looking at last city set index to start
            if (cityIndex + 1 < this.tourSize()) {
                destinationCity = this.getCity(cityIndex + 1);
            } else {
                destinationCity = this.getCity(0);
            }
            tourDistance += fromCity.distanceTo(destinationCity);
        }
        this.distance = tourDistance;
    }
    return this.distance;
}

Tour.prototype.tourSize = function () {
    return this.tour.length;
}

Tour.prototype.containsCity = function (city) {
    return this.tour.some(function (tourCity) {
        return (tourCity != null && (city.x === tourCity.x && city.y === tourCity.y));
    });
}

Tour.prototype.toString = function () {
    var geneString = "|";
    for (var i = 0; i < this.tourSize(); i++) {
        geneString += this.getCity(i) + '|';
    }
    return geneString;
}