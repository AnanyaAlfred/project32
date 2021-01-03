class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.3,
        'friction':0.5,
    }
    this.visibility = 255;
    this.image = loadImage("polygon.png");
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  score(){
    if(this.visibility<0&&this.visibility>-105){
      score++
    }
  }
  display(){

    if(this.body.speed<3){
      //fill("yellow");
     //rect(0, 0, this.width, this.height);
     push();
     var pos =this.body.position;
      var angle = this.body.angle;
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
     // rect(0,0,this.width,this.height)
      
    image(this.image,0,0,50,50)
   //image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop();
    }
    else{
      World.remove (world, this.body);
      push()
      this.visibility = this.visibility - 5;
      tint (255, this.visibility);
      
      //rect(0,0,this.width,this.height)
      pop()
    }
   /* var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("blue")
    pop();*/

  }
};
