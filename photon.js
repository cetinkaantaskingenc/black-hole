class Photon {
    constructor(x,y) {
      this.position = createVector(x,y);
      this.velocity = createVector(-speedOfLight, 0);
      this.history = [];
      this.stopped = false;
    }
    
    update() {
      if (this.stopped == false) {
        
      
      this.history.push(this.position.copy());
      
      const deltaV = this.velocity.copy();
      deltaV.mult(deltaTime);
      
      this.position.add(deltaV);
      
      if (this.history.length > 400) 
        this.history.splice(0,1);
      }
    }
    
    stop () {
      this.stopped = true;
    }
    
    show() {
      strokeWeight(2);
      stroke(255,0,0);
      point(this.position.x, this.position.y);
      
      strokeWeight(2);
      noFill();
      beginShape();
      
      for (let i of this.history) 
        vertex(i.x, i.y);
      
      endShape();
    }
  }