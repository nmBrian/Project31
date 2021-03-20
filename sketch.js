const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var droplet = [];
var maxDroplet = 100;
var umbre1;
var thunder, thunder1,thunder2,thunder3,thunder4;
var rand;
var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   var canvas = createCanvas(800,900);

   engine = Engine.create();
   world = engine.world;
   if(frameCount % 100 === 0){
   for(var i = 0; i<maxDroplet; i++){
       droplet.push(new Drops(random(0,800), random(0,450)));
      }
   }

   umbre1 = new Umbrella(400, 590);
}

function draw(){
    background(8,7,13);
    Engine.update(engine);

    rand = Math.round(random(1,4));
    if(frameCount % 80 === 0 ){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(0,800), random(50,100), 100, 100);
        switch(rand){
            case 1:thunder.addImage(thunder1);
            break;
            case 2:thunder.addImage(thunder2);
            break;
            case 3:thunder.addImage(thunder3);
            break;
            case 4:thunder.addImage(thunder4);
            break;
            default:break;
        }
        thunder.scale = random(0.5 , 0.9);
    }
    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }
    
    umbre1.display();
    
    for(var i = 0; i<maxDroplet; i++){
        droplet[i].update();
        droplet[i].display();
    }
    drawSprites();
}   

