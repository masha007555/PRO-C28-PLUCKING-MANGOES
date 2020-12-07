class Rope{
    constructor(body, anchor){
        var option={
            bodyA: body,
            pointB: anchor,
            stiffness: 0.003,
            length: 1
        }

        this.rope1=loadImage("sling1.png");
        this.rope2=loadImage("sling2.png");
        this.rope3=loadImage("sling3.png");
        
        this.bodyA=body
            this.pointB=anchor
            this.Rope=Constraint.create(option)
            World.add(world,this.Rope)
        }
    
        attach(body){
            this.Rope.bodyA=stone.body;
        }
    
        fly()
        {
            this.Rope.bodyA=null;
        }
    
        display()
        {
            image(this.rope1,150,380,50,80);
            image(this.rope2,120,380,60,50);

            if(this.Rope.bodyA)
            {
                var pointA=this.bodyA.position;
                var pointB=this.pointB
    
                strokeWeight(2);
                
                



                if (pointA.x<170){

                    strokeWeight(7);
                    line(pointA.x,pointA.y,pointB.x-10,pointB.y+10);
                    line(pointA.x,pointA.y,pointB.x+40,pointB.y+10);
                    image(this.rope3,pointA.x-30,pointA.y-15,15,30);
                } else{
                    strokeWeight(3);
                    line(pointA.x,pointA.y,pointB.x-10,pointB.y+10);
                    line(pointA.x,pointA.y,pointB.x+40,pointB.y+10);
                    image(this.rope3,pointA.x+16,pointA.y-15,15,30);
                }
            }
        }
    }
    