class SuperHero{
    constructor(x,y,width,height){
        var options = {
            restitution : 0.8,
            density : 1.0,
            frictionAir : 0.08
        }
        this.superhero = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.superhero);
    }
    display(){
        var pos = this.superhero.position;
        var angle = this.superhero.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue")
        rect(0,0,this.width,this.height);
        pop();
    }
}