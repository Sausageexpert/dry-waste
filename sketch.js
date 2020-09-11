


var garbage, canvas;
var engine, world;
var ground;
var bin1, bin2, bin3;
var rightEdge, leftEdge;

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
	bin1 = new Bin(600, 592, 90, 20);
	bin2 = new Bin(643, 635, 180, 20);
	bin3 = new Bin(690, 592, 90, 20);
	
	Engine.run(engine);
  
}

function draw() {
  background(0);

  garbage.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();

  if(garbage.y > bin2.y - bin2.height/2){
	  garbage1.velocityY = 0;
  }

  if (hasCollided(garbage, bin2)){
	  garbage.velocityY = 0;
	  garbage.velocityX = 0;
  }

  drawSprites();

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(garbage.body,garbage.body.position,{x:18,y:-25});

  
	}
}

function hasCollided(garbage, bin2){
	rightEdge = garbage.y + garbage.width/2;
	leftEdge = bin2.y - bin2.height/2;
	//leftEdge = wall.x ;
  
	  if (rightEdge>=leftEdge)
	  {
		  return true;
	  }
	  return false;
}





