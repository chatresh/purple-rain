const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
drops = [];
drop =[];
function setup() {
  createCanvas(600,250);
    engine = Engine.create();
    world = engine.world;
for (var i = 0; i<600; i=i+20){
   drops[i] = new Rain(random(width),random(-100,-200),random(2,3),10);
   
}
  }
function draw() {
  background(155,230,175); 
  Engine.update(engine);
  
  for (var i = 0; i<600; i=i+20){
    drops[i].display();
    
 }


 }
 
