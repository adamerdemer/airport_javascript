function Airport(plane) {
  this.hangar = [];
  this.plane = new Plane();
}

Airport.prototype.land = function(plane) {
  this.plane.landed();
  this.hangar.push(plane);
  return("landing confirmed");
};

Airport.prototype.takeoff = function(plane) {
  return("take off confirmed");

};
