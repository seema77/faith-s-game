var bkImg;
var boyImg;

function preload(){
bkImg=loadImage("bk.jpg");
boyImg=loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png","b6.png","b7.png","b8.png","b9.png")
}

function setup(){
createCanvas(1200,550)
boy = createSprite(100,470,20,20);
boy.addAnimation("running",boyImg)
boy.scale=0.3
}

function draw(){
background(bkImg);

drawSprites();
}