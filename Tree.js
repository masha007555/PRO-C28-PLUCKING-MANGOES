class Tree{
	constructor(x,y,w,h){

		var options={
			isStatic:true,
			friction:2
		}

		this.w=w;
        this.h=h;
        this.image=loadImage("tree.png");
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}

	display(){
		var treePos=this.body.position;

		push()
		translate(treePos.x, treePos.y);	
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0,500,600);
		pop()
	}
}