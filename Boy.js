class Boy{
	constructor(x,y,w,h){

		var options={
			isStatic:true,
		}

		this.w=w;
        this.h=h;
        this.image=loadImage("boy.png");
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}

	display(){
		var boyPos=this.body.position;

		push()
		translate(boyPos.x, boyPos.y);	
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0,300,400);
		pop()
	}
}