class Bird extends BaseClass{//connects the child class to the parent class
  constructor(x,y){
    super(x,y,50,50);// to inherit the properties by using the constructor of parent class
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();//connects to the display function of the parent class
  }
}