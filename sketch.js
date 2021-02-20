const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constarint;

var engine, world;
var superhero;
var rope;


function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  
  superhero = new SuperHero(500,300,100,100);
  monster = new Monster(1000,400,300,300);
  ground = new Ground(1500,700,4000);
}

function draw() {
  background(0);
  Engine.update(engine);
  superhero.display();
  monster.display();
  ground.display();

}

