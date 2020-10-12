class pole {
    constructor (x,y,width,lenght){
        var options = {
            isStatic:true
        }
        this.bar = Bodies.rectangle(x,y,width,lenght,options);
        this.width=width;
        this.lenght=lenght;
        World.add(world,this.bar);
    }
    display(){
        rectMode(CENTER);
        rect(this.bar.position.x,this.bar.position.y,this.width,this.lenght)
    }
}