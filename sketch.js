const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2,height,width,20);
    ball=new Ball(400,200,200,200)
    rope = new Rope(ball.body,{x:400,y:100})

    box1=new Box (600,100,100,100)
    box2=new Box (600,100,100,100)
    box3=new Box (600,100,100,100)
    box4=new Box (600,100,100,100)
    box5=new Box (600,100,100,100)
    box6=new Box (600,100,100,100)

    box7=new Box(800,100,100,100)
    box8=new Box(800,100,100,100)
    box9=new Box(800,100,100,100)
    box10=new Box(800,100,100,100)
    box11=new Box(800,100,100,100)
    box12=new Box(800,100,100,100)

    box13=new Box(1000,100,100,100)
    box14=new Box(1000,100,100,100)
    box15=new Box(1000,100,100,100)
    box16=new Box(1000,100,100,100)
    box17=new Box(1000,100,100,100)
    box18=new Box(1000,100,100,100)
    box19=new Box(1000,100,100,100)
    box20=new Box(1000,100,100,100)
    // cha1n1=new Chain(pig1.body,pig3.body);

    
}

function draw(){
    background(220);
    Engine.update(engine);
    
    ground.display()
    ball.display()
    rope.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
}

function mouseDragged(){
     Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    // slingshot.fly()
}
