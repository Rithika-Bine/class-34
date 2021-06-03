class Rope{
    constructor(bodyA,pointB){
       var  options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:400
        }
        this.rope=Constraint.create(options)
         World.add(world,this.rope)
    }
    fly(){
        this.rope.bodyA=null
    }
    display(){

        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position;
            var pointB=this.rope.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}