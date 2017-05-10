function Airport(plane) {
  this.hangar = [];
  this.plane = new Plane();
}

Airport.prototype.land = function(plane) {
  this.plane.landed(plane);
  this.hangar.push(plane);
  return("landing confirmed");
};

Airport.prototype.takeoff = function(plane) {
  this.plane.takenoff(plane);
  this.hangar.pop(plane);
  return("take off confirmed");

};
