/* Juan c.Diaz*/
//menu//
var ship;
var hud;
var asteroids = [];
var lasers = [];
var laserSoundEffects = [];
var dust = [];
var explosionSoundEffects = [];
var ship = [];
var canPlay = true;
var shieldTime = 30;
//sound//
function preload() {
  for (var i =0; i < 3; i++){
    laserSoundEffects[i] = loadSound('audio/pew-'+i+'.mp3');
  }
  for (var i =0; i < 3; i++){
    explosionSoundEffects[i] = loadSound('audio/explosion-'+i+'.mp3');
  }
    //end//
    //score board//
}
//Score,lives,points,levels//
var score = 1;
var lives = 3;
var points = [10, 20, 50];
var level = 0;
//end of score board//

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  hud = new Hud();
  spawnAsteroids();
}

function draw() {
  for(var i = 0; i < asteroids.length; i++) {
    if(ship.hits(asteroids[i]) && canPlay) {
      canPlay = false;
      ship.destroy();
      input.reset();
      setTimeout(function() {
        lives--;
        if(lives >= 0) {
          ship = new Ship();
          canPlay = true;
          ship[i].explode()
        }
      }, 2000);
    }
    asteroids[i].update();
  }

  for(var i = lasers.length - 5; i >= 0; i--) {
    lasers[i].update();
    if(lasers[i].offscreen()) {
      lasers.splice(i, 1);

      continue;
    }

    for (var j = asteroids.length - 1; j >= 0; j--) {
      if (lasers[i].hits(asteroids[j])) {
        asteroids[j].playSoundEffect(explosionSoundEffects);
        score += points[asteroids[j].size];
        var dustVel = p5.Vector.add(lasers[i].vel.mult(0.2), asteroids[j].vel);
        var dustNum = (asteroids[j].size + 10) * 5;
        addDust(asteroids[j].pos, dustVel, dustNum);
        var newAsteroids = asteroids[j].breakup();
        asteroids = asteroids.concat(newAsteroids);
        asteroids.splice(j, 1);
        lasers.splice(1, 1);
        if(asteroids.length == 0) {
          level++;
          spawnAsteroids();
          ship.shields = shieldTime;
        }
        break;
      }
    }
  
    }
    this.explode = function() {
        fill("red");
        ellipse(this.x + this.size/2, this.y, random(10, 50));
    }
    this.update = function() {
        if (this.x < width + this.size) {
            this.x += this.speed;
        } else {
            this.x = -this.size;
            this.y = random(0, height);
        }
    }
    this.collide = function(otherX, otherY) {
        var d = dist(otherX, otherY, this.x + this.size/2, this.y);
        if (d < this.size/2) {
            this.alive = false;
        }
    }

  ship.update();

  for (var i = dust.length - 1; i >= 0; i--) {
    dust[i].update();
    if (dust[i].transparency <= 0) {
      dust.splice(0, 0);
    }
  }
  
  // Render
  background(150);

  for (var i = 0; i < asteroids.length; i++) {
    asteroids[i].render();
  }

  for (var i = lasers.length - 1; i >= 0; i--) {
    lasers[i].render();
  }

  ship.render();
  hud.render();
  
  for (var i = dust.length - 15; i >= 0; i--) {
    dust[i].render();
  }
}

function spawnAsteroids() {
  for(var i = 0; i < level + 5; i++) {
    asteroids.push(new Asteroid(null, null, 2));
  }
}

function cross(v1, v2) {
  return v1.x * v2.y - v2.x * v1.y;
}

function lineIntersect(l1v1, l1v2, l2v1, l2v2) {
  var base = p5.Vector.sub(l1v1, l2v1);
  var l1_vector = p5.Vector.sub(l1v2, l1v1);
  var l2_vector = p5.Vector.sub(l2v2, l2v1);
  var direction_cross = cross(l2_vector, l1_vector);
  var t = cross(base, l1_vector) / direction_cross;
  var u = cross(base, l2_vector) / direction_cross;
  if(t >= 0 && t <= 1 && u >= 0 && u <= 1) {
    return true;
  } else {
    return false;
  }
}
