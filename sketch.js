//Create variables here
var dog,happyDog
var database
var foodS,foodStock;
var dogImg


function preload()
{
dogImg=loadImage("../images/dogImg.png")

	//load images here
}

function setup() {
	createCanvas(500, 500);
  
dog=createSprite(400,80,20,40)
dog.addImage("dogImg/dogImg.png")


}


function draw() {  

  drawSprites();
  //add styles here

}



