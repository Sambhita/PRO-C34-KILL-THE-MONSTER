class Hero{
    constructor(x,y,width,height){
    var option ={
        isStatic: false,
        frictionAir:1,
        //restitution:0.8,
        //friction:0.05,
        //density:40
    }
    this.image = loadImage("Images/superman.png");
    this.body = Bodies.rectangle(x,y,width,height,option)
    this.width = width;
    this.height = height;
    World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}