class SlingShot{
    constructor(bodyA, bodyB,offsetX,offsetY){

        this.offsetX =offsetX;
        this.offsetY =offsetY;

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        
        console.log(bodyA,bodyB);
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){

           var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            strokeWeight(2);
            stroke("black");

            var Anchor1X=pointA.x;
            var Anchor1Y=pointA.y;

            var Anchor2X=pointB.x+this.offsetX;
            var Anchor2Y=pointB.y+this.offsetY;

            line(Anchor1X, Anchor1Y, Anchor2X , Anchor2Y );
        
    }
    
}