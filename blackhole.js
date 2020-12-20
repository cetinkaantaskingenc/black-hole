class Blackhole {
    constructor(x,y,m) {
      this.position = createVector(x,y);
      this.mass = m;
      this.radius = (2 * gravity * this.mass) / (speedOfLight*speedOfLight);
    }
  
  pull(photon) {
    const force = p5.Vector.sub(this.position, photon.position);
    const r = force.mag();
    const fg = gravity * this.mass / (r*r);
    force.setMag(fg);
    photon.velocity.add(force);
    photon.velocity.setMag(speedOfLight)
    
    if (r < this.radius)
      photon.stop();
  }

  show() {
      fill(0);
      noStroke();
      circle(this.position.x, this.position.y, this.radius);
      
      //noFill();
      //stroke(100, 100);
      //strokeWeight(64);
      //circle(this.position.x, this.position.y, this.radius*3+32);
      
      //stroke(150,100,0);
      //strokeWeight(32);
      
      //stroke(255,150,0);
      //circle(this.position.x, this.position.y, this.radius*1.5+16);
      
    }
}