


var garbage, canvas;
var engine, world;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	garbage = new Waste(300, 300, 20, 20);
	ground = new Ground(400, 350, 800, 10);
	
	Engine.run(engine);
  
}

function draw() {
  background(0);

  garbage.display();
  ground.display();
  drawSprites();

 
}



