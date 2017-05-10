function Plane () {
  this.inflight = true;
}

Plane.prototype.landed = function () {
  this.inflight = false;
};
