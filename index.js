console.log("hi index.js")
import City from './src/classes/City.js';
import RouteManager from './src/classes/RouteManager.js';
import config from './config.js';
let configCity = config.cities[0];
console.log(configCity);
let city = new City(configCity.x,configCity.y,configCity.label);
console.log(city);
let routeManager = new RouteManager(config.cities);