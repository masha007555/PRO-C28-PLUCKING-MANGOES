class FakeStone{
	constructor(x,y,w,h){

		var options={
			isStatic:true,
		}

		this.w=w;
        this.h=h;
        this.image=loadImage("stone.png");
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}

	display(){
		var treePos=this.body.position;

		push()
		translate(treePos.x, treePos.y);	
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0,60,60);
		pop()
	}
}