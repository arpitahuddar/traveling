function TourManager(){

}
TourManager.destinationCities = [];
TourManager.addCity = function(city){
    TourManager.destinationCities.push(city);
}
TourManager.getCity = function(index){
    return TourManager.destinationCities[index];
}
TourManager.numberOfCities = function(){
    return TourManager.destinationCities.length;
}