class String{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.4
        }
        this.pointA = pointA;
        this.bodyB = bodyB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        
    }    
}