const speedOfLight = 35;
const gravity = 2;
const deltaTime = 0.1;

let bhole;

const particles = [];

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  bhole = new Blackhole(width / 2, height / 2, 8000);
  
  start = height/2;
  end = height/2 - bhole.radius*2.6;
  
  for (let y = 0; y < start; y+=10) {
    particles.push(new Photon(width-20,y));
  }  
  
}

function draw() {
  bhole.show();
  
  for (let p of particles) {
    bhole.pull(p);
    p.update();
    p.show();
  }
}