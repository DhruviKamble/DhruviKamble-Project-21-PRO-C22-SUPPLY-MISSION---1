var helicopter_img, helicopter, package,package_img;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopter_img=loadImage("helicopter.png")
	package_img=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	// rectMode(CENTER);

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopter_img);
	helicopter.scale=0.6;

	package=createSprite(width/2, 80, 10,10);
	package.addImage(package_img)
	package.scale=0.2

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	Engine.run(engine);  
}


function draw() {
//   rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	package.x = packageBody.position.x;
	package.y = packageBody.position.y;
	
	Matter.Body.setStatic(packageBody,false);
  }
}