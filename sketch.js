
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);

    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(410,350,1200,20);

	bin= new Dustbin(820,335,130,10);
	bin2= new Dustbin(760,285,10,90);
	bin3= new Dustbin(880,285,10,90);

	paper= new Paper(200,335,15);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  Engine.update(engine);

  paper.display();
  ground.display();
  bin.display();
  bin2.display();
  bin3.display();

  

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body, paper.body.position,{x:12,y:-40});
	}
}



