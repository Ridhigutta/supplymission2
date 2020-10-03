var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redBody1,redBody2,redBody3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redBody1=createSprite(width/2,650,200,20);
	redBody1.shapeColor=color(255,0,0);

	redBody2=createSprite(510,610,20,100);
	redBody2.shapeColor=color(255,0,0);

	redBody3=createSprite(310,610,20,100);
	redBody3.shapeColor=color(255,0,0);

	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.55, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 


	Engine.run(engine);

	keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
   
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Body.setStatic(packageBody,false)
	
 
  }
}





