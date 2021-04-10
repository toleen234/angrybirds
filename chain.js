class chaiN{
  constructor(bodyA,bodyB){
  var options = {
   bodyA: bodyA,
   bodyB: bodyB,
   stiffness: 0.04,
   length:10   
  }
  this.chaiN=Constraint.create(options);
  World.add(world,this.chaiN)
  }  
  display(){
      var pointAy = this.chaiN.bodyA.position;
      var pointBye = this.chaiN.bodyB.position;
      line(pointAy.x,pointAy.y,pointBye.x,pointBye.y,)
  }
}