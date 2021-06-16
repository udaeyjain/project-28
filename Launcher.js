class Launcher{
constructor(body,ancher){
var options={
bodyA:body,
pointB:ancher,
stiffness:0.02,
length:2
}
this.bodyA=body;
this.pointB=ancher;
this.launcher=Constraint.create(options);
World.add(world,this.launcher);
}
fly()
{
this.launcher.bodyA=null;
}

bodyA=sling.bodyA;
 pointB=pointB;

display(){
if(this.launcher.bodyA)
{
strokeWeight(3);
line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);

}


}



}