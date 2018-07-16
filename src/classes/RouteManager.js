export default class RouteManager{
    constructor(){
        this._destinationCities = [];
    }
    get destinationCities(){
        return this._destinationCities;
    }
    add(cities){
        cities.forEach(city=>{
            this._destinationCities.push(new City(city.x, city.y, city.label))
        })      
    }
    getCity(index){
        return this._destinationCities[index];
    }
    numberOfCities(){
        return this._destinationCities.length;
    }
}