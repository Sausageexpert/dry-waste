


var garbage, canvas;
var engine, world;
var ground;
var bin1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	garbage = new Waste(50, 300, 20, 20);
	ground = new Ground(400, 650, 800, 10);
	bin1 = new Bin(600, 650, 20, 50);
	
	Engine.run(engine);
  
}

function draw() {
  background(0);

  garbage.display();
  ground.display();
  bin1.display();
  drawSprites();

 
}



