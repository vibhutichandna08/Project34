const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var backgroundImg;
var hero;
var fly;
var monster;

function preload() {
    backgroundImg =loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(1200, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400, 500, 800, 20);
  hero = new Hero(300, 50, 125);
  fly = new Fly(hero.body,{x:300, y:50});

  block1 = new Block(500, 100, 50, 50);
  block2 = new Block(500, 100, 50, 50);
  block3 = new Block(500, 100, 50, 50);
  block4 = new Block(500, 100, 50, 50);
  block5 = new Block(500, 100, 50, 50);
  block6 = new Block(500, 100, 50, 50);
  block7 = new Block(500, 100, 50, 50);

  block8 = new Block(600, 100, 50, 50);
  block9 = new Block(600, 100, 50, 50);
  block10 = new Block(600, 100, 50, 50);
  block11 = new Block(600, 100, 50, 50);
  block12 = new Block(600, 100, 50, 50);
  block13 = new Block(600, 100, 50, 50);

  block14 = new Block(700, 100, 50, 50);
  block15 = new Block(700, 100, 50, 50);
  block16 = new Block(700, 100, 50, 50);
  block17 = new Block(700, 100, 50, 50);
  block18 = new Block(700, 100, 50, 50);
  block19 = new Block(700, 100, 50, 50);
  block20 = new Block(700, 100, 50, 50);
  block21 = new Block(700, 100, 50, 50);

  monster = new Monster(900, 200, 150);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground.display();
  hero.display();
  monster.display();
  //fly.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
}



