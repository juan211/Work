function Entity(x, y, radius)
{
  this.pos = createVector(x, y);
  this.r = radius;
  this.rmax = radius;
  this.heading = 0;
  this.rotation = 0;
  this.vel = createVector(6, 10);
  this.accelMagnitude = 0;
}

Entity.prototype.update = function() {
  this.heading += this.rotation;


  var force = p5.Vector.fromAngle(this.heading);
  force.mult(this.accelMagnitude);
  this.vel.add(force);

  this.pos.add(this.vel);
  this.edges();
}

Entity.prototype.setAccel = function(magnitude)
{
  this.accelMagnitude = magnitude;
}

Entity.prototype.edges = function() {
  if (this.pos.x > width + this.rmax) {
    this.pos.x = -this.rmax;
  } else if (this.pos.x < -this.rmax) {
    this.pos.x = width + this.rmax;
  }
  if (this.pos.y > height + this.rmax) {
    this.pos.y = -this.rmax;
  } else if (this.pos.y < -this.rmax) {
    this.pos.y = height + this.rmax;
  }
}

Entity.prototype.setRotation = function(rot) {
  this.rotation = rot;
}
