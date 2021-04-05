class Sling{
    constructor(bodyA,pointB){
        var options={
            stiffness:0.9,
            length:300,
            bodyA:bodyA,
            pointB:pointB
        }
        this.pointB=pointB;
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
        
    }
    display(){
            var pointA=this.rope.bodyA.position;
            var pointB=this.pointB;
            //fill(51);
            //stroke(48,22,8);
            strokeWeight(0)
            line(pointB.x,pointB.y,pointA.x,pointA.y)
    }
}