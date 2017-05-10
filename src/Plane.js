'use strict';

function Plane () {
  this.inflight = false;
}

Plane.prototype.landed = function () {
  this.inflight = false;
};

Plane.prototype.takenoff = function () {
  this.inflight = true;

};
