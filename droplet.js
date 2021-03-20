class Drops{
    constructor(x ,y){
        var options = {
            'restitution':0.1,
            'friction':0.1
        }
        this.rain = Bodies.circle(x, y, 7, options);
        this.radius = 7;
        this.image = loadImage("images/raindrop.png");
        World.add(world, this.rain);
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain , {x: random(20, 780) , y:random(10, 200)})
        }
    }

    display(){
        //fill("lightBlue");
        push();
        imageMode(CENTER);
        image(this.image, this.rain.position.x, this.rain.position.y, 20, 20);
        // ellipseMode(CENTER);
        // ellipse(this.rain.position.x , this.rain.position.y , this.radius , this.radius);
        pop();
    }

}