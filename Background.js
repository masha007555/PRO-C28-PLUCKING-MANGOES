class Background{
	constructor(x,y,w,h){

		var options={
			isStatic:true,
		}

		this.w=w;
        this.h=h;
        this.image=loadImage("forest.jpg");
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}

	display(){
		var bgPos=this.body.position;

		push()
        translate(bgPos.x, bgPos.y);
        imageMode(CENTER);
        image(this.image,0,0,1800,700);
		pop()
	}
}