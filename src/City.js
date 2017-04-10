function City() {
    var default_args = {
        'x'      :   0,
        'y'      :   0,
        'label'  :  'label'
    }
     var options = {};

    if (arguments[0]) options.x = arguments[0];
    if (arguments[1]) options.y = arguments[1];
    if (arguments[2]) options.label = arguments[2];

      for (var index in default_args) {
        if (typeof options[index] == "undefined") options[index] = default_args[index];
    }
    this.x = options.x;
    this.y = options.y;
    this.label = options.label;

}
City.prototype.getX = function(){
    return this.x;
}
City.prototype.getY = function(){
    return this.y;
}
City.prototype.distanceTo = function(city){
    var xDistance = Math.abs(this.getX() - city.getX());
    var yDistance = Math.abs(this.getY() - city.getY());
    let distance = Math.sqrt((xDistance*xDistance) + (yDistance * yDistance));
    //console.log("distance",distance);
    return distance;
}
City.prototype.toString = function(){
    return `x:${this.getX()}, y:${this.getY()}`;
}
    
