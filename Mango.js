class Mango{
    constructor(x,y,r){

		var options={
			isStatic:true,
			restitution:0.5,
			friction:1.5,
            density:4.5
        }

        this.x=x;
        this.y=y;
		this.r=50;
		this.image=loadImage("mango.png");
		this.body=Bodies.circle(this.x, this.y,this.r/2, options);
		World.add(world, this.body);

    }
    
	display(){
			
        var mangoPos=this.body.position;		

		push()
        translate(mangoPos.x, mangoPos.y);
        rotate(this.body.angle);

        // ellipseMode(CENTER);
        // strokeWeight(3);
        // stroke("black");
        // fill("gray");
        // ellipse(0,0,100,100);
        
		imageMode(CENTER);
        image(this.image,0,0,50,50);
        rotate(this.body.angle);
		pop()
			
	}
}