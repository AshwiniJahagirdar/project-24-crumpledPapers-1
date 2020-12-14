class Paper{

constructor(x,y,r){

var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}

this.x=400;
this.y=620,
this.r=20;
this.body=Bodies.circle(this.x,this.y,this.r,options);
World.add(world,this.body);

}

display(){
    var pos=this.body.position;

    push();
    translate(pos.x,pos.y);
    rectMode(CENTER)
    strokeWeight(3);
    stroke("black");
    fill(255,0,127);
    ellipse(0,0,this.y,this.r);
    pop();
}

}