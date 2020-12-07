class Stone{
    constructor(x,y,r){

		var options={
			isStatic:false,
			restitution:0.5,
			friction:1,
            density:4.5
        }

        this.x=x;
        this.y=y;
		this.r=40;
		this.image=loadImage("stone.png");
		this.body=Bodies.circle(this.x, this.y,this.r/2, options);
		World.add(world, this.body);

    }
    
	display(){
			
        var stonePos=this.body.position;		

		push()
        translate(stonePos.x, stonePos.y);
        rotate(this.body.angle);
        // ellipseMode(CENTER);
        // strokeWeight(3);
        // stroke("black");
        // fill("gray");
        // ellipse(0,0,100,100);
        
		imageMode(CENTER);
		image(this.image,0,0,60,60);
		pop()
			
	}
}