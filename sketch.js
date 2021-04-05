const Engine =Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;
var ground;
var backImage;
var superman;
var string;
var monster;
var sun;

function preload() {
  backImage = loadImage("Images/bg.png")
  sun = loadImage("Images/sun.png")
}

function setup() {
  createCanvas(3000,800)
  engine=Engine.create();
  world=engine.world;
  box1 = new Box(950,400,90,90)
  box2 = new Box(950,400,90,90)
  box3 = new Box(950,400,90,90)
  box4 = new Box(950,400,90,90)
  box5 = new Box(750,350,90,90)
  box6 = new Box(750,350,90,90)
  box7 = new Box(750,350,90,90)
  box8 = new Box(750,350,90,90)
  box9 = new Box(750,350,90,90)
  box10 = new Box(550,300,90,90)
  box11 = new Box(550,300,90,90)
  box12 = new Box(550,300,90,90)
  box13 = new Box(550,300,90,90)

  ground = new Ground(600,600,1500,10)
  superman = new Hero(200,200,300,300)
  monster = new Monster(1200,200,180,250)
  string = new Sling(superman.body,{x:500,y:50})

}

function draw() {
  background(backImage);
  Engine.update(engine);

  image(sun,1500,10,150,150);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();

    superman.display();
    monster.display();

    string.display()

}
function mouseDragged(){
  Matter.Body.setPosition(superman.body,{x:mouseX,y:mouseY})
}