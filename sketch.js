
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Dustbin(400,680,800,30);
	box1 = new Dustbin(515,600,20,100);
	box2 = new Dustbin(610,660,200,20);
	box3 = new Dustbin(710,600,20,100);
	paper = new Paper(30,650,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-75});
	}
}



