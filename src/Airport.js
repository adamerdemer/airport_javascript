'use strict';


function Airport(plane, weather) {
  this.hangar = [];
  this.plane = new Plane();
  this.weather = new Weather();
}

Airport.prototype.land = function(plane) {
  this.plane.landed(plane);
  this.hangar.push(plane);
  return("landing confirmed");
};

Airport.prototype.takeoff = function(plane) {
  if(this.weather.isStormy === true) {
    throw new Error('Unsafe to fly');
  } else {
  this.plane.takenoff(plane);
  this.hangar.pop(plane);
  return("take off confirmed");
  }
};
