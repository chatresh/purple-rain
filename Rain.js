class Rain {
  constructor(x,y,width, height){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x,y,width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    
  }
  display(){
      var pos = this.body.position;
     
      stroke(138,42,225)
      rect(pos.x,pos.y,2,10);
     if(pos.y > 250){
      stroke(138,42,225)
      rect(pos.x,pos.y,2,10);
      pos.y = random(300,400);
       pos.velocityY = random(7,8);
     }
  }

}