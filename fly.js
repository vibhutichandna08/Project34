class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 300
        }
        
        this.pointB = pointB
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }
    attach(body){
        this.fly.bodyA = body;
    }
    
    fly(){
        this.fly.bodyA = null;
    }

    display(){
        
        if(this.fly.bodyA){
            var pointA = this.fly.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(0);
            
            line(pointB.x, pointB.y , pointA.x, pointA.y);
            
            pop();
        }
    }
    
}