class Ground{
	constructor(x,y,w,h){

		var options={
			isStatic:true,
			friction:2,
			
		}

		this.w=w;
		this.h=h;
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}

	display(){
		var groundPosition=this.body.position;

		push()
		translate(groundPosition.x, groundPosition.y);	
		rectMode(CENTER);
		//rect(0,0,this.w,this.h);
		pop()
	}
}