class bob {
    constructor(x,y){
        var options={
            friction:2.0,
            isStatic:true
        }

        this.ball = Bodies.circle(x,y,20,options);
    }
    display() {
        ellipseMode(RADIUS);
    ellipse(this.ball.position.x, this.ball.position.y, 20, 20);
    }
}