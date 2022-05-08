var BGIMG;
var Cat, Catimg1,Catimg2,Catimg3;
var Mouse, Mouseimg1,Mouseimg2,Mouseimg3;

function preload() {
    //load the images here
    BGIMG = loadImage("images/garden.png");
    Catimg1 = loadAnimation("images/cat1.png");
    Mouseimg1 = loadAnimation("images/mouse1.png");
    Catimg2 = loadAnimation("images/cat2.png,images/cat3.png");
    Mouseimg2 = loadAnimation("images/mouse2.png,images/mouse3.png");
    Catimg3 = loadAnimation("images/cat4.png");
    Mouseimg3 = loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    Cat = createSprite(870,600);
    Cat = addAnimation("cSitting", Catimg1);
    Cat.scale = 0.5;

    Mouse = createSprite(600,600);
    Mouse = addAnimation("mSitting", Mouseimg1);
    Mouse.scale = 0.2;
}

function draw() {

    background("BGIMG");
    //Write condition here to evalute if tom and jerry collide

    if(Cat.x - Mouse.x < (Cat.width - Mouse.width)/2){
        Cat.velocityX = 0;
        Cat.addAnimation("lastc", Catimg3);
        Cat.changeAnimation("lastc");
        Cat.x = 300;
        Cat.scale = 0.5;

        Mouse.velocityX = 0;
        Mouse.addAnimation("lastm ", Mouseimg3);
        Mouse.changeAnimation("lastm");
        Mouse.x = 300;
        Mouse.scale = 0.5;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      Mouse.addAnimation("mouse_teasing", Mouseimg2);
      Mouse.changeAnimation("mouse_teasing");
      Mouse.frameDelay = 25;

      Cat.velocityX = -8;
      Cat.addAnimation("cat_teasing", Catimg2);
      Cat.changeAnimation("cat_teasing");
      Cat.frameDelay = 25;
  }  

}
