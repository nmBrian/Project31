class Umbrella{
    constructor(x, y){
        var options = {
            'isStatic' : true
        }
        this.umb = Bodies.circle(x, y,110, options);
        this.radius = 110;
        this.image = loadImage("images/Walking Frame/walking_1.png");
        World.add(world, this.umb);
    }

    display(){
        var pos = this.umb.position;
        imageMode(CENTER);
        image(this.image, pos.x , pos.y + 100, 500,500);
        
    }
}