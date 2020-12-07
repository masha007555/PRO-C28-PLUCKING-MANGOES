
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//const Render = Matter.Render;

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bg = new Background(900,350,0,0);
	tree = new Tree(1400,320,0,0);
	boy = new Boy(250,540,0,0);
	fs1 = new FakeStone(370,600,0,0);
	fs2 = new FakeStone(400,600,0,0);
	fs3 = new FakeStone(375,640,0,0);
	fs4 = new FakeStone(345,650,0,0);
	fs5 = new FakeStone(400,640,0,0);
	fs6 = new FakeStone(350,615,0,0);
	stone = new Stone(150,380,50);
	mango1 = new Mango(1400,200,50);
	mango2 = new Mango(1500,200,50);
	mango3 = new Mango(1450,100,50);
	mango4 = new Mango(1300,250,50);
	mango5 = new Mango(1360,100,50);
	mango6 = new Mango(1590,240,50);
	ground = new Ground(900,600,1800,30);
	rope = new Rope(stone.body,{x:150,y:380});

	// var render = Render.create({
	// 	element:document.body,
	// 	engine: engine,
	// 	options: {
	// 	  width: 1800,
	// 	  height: 700,
	// 	  wireframes:true,
	// 	  showAngleIndicator: true
	// 	},
	   
	//   });
	//   Render.run(render);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  bg.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  ground.display();
  boy.display();
  fs1.display();
  fs2.display();
  fs3.display();
  fs4.display();
  fs5.display();
  fs6.display();
  rope.display();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);

  drawSprites();

  textSize(40);
  strokeWeight(2.5);
  stroke("black");
  fill("black");
  line(100,110,780,110);
  line(100,115,780,115);
  text("Use Space Bar to use the stone again",100,100);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	rope.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false); 
	}
}

 function keyPressed() {
 	if (keyCode === 32){
    	Matter.Body.setPosition(stone.body, {x:150, y:380}) 
 		rope.attach(stone.body);
	}
}
