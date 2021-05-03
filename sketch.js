var bgI;
var cat,catsit,catwalk,catI2,catI3,catsit2;
var mouse,mouseI1,mouseI2,mousetease,mouseI4;
function preload() {
    //load the images here
    bgI=loadImage("images/garden.png");
    catsit=loadImage("images/cat1.png");
    catwalk=loadAnimation("images/cat2.png","images/cat3.png");
    mouseI1=loadImage("images/mouse1.png");
    catI2=loadImage("images/cat2.png");
    catsit2=loadImage("images/cat4.png");
    mousetease=loadAnimation("images/mouse3.png","images/mouse2.png");
    mouseI4 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat=createSprite(585,680,20,20);
   cat.addImage(catsit);
   cat.scale=0.1;

mouse= createSprite(80,680,20,20);
mouse.addImage(mouseI1);
mouse.scale=0.1;

}

function draw() {

    background(bgI);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x <(cat.width-mouse.width)/2){
    mouse.changeImage(mouseI4);
cat.changeImage(catsit2);
}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown (LEFT_ARROW)){
    mouse.addAnimation("mousetease",mouseI2);
    mouse.changeAnimation("mousetease");
    mouse.frameDelay= 25;
}

if(KeyDown(RIGHT_ARROW)){
    
    cat.addAnimation("catwalk",catI2);
    cat.changeAnimation("catwalk");
}


}
