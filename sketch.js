const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground;
var dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200, 550, 0);
	ground = new Ground(400,height,1200,20);
	dustbin1 = new Dustbin(300, 320, 200, 20);
	dustbin2 = new Dustbin(250, 200, 20, 250);
	dustbin3 = new Dustbin(220, 100, 20, 250);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW) {

	Body.applyForce(paper1.body, paper1.body.position,{x:85, y:-85});
}

}