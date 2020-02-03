var venus,Venus2;
var explosion;
//var cute;
var  star1,star2,star3,star4,star5,star6,star7,star8,star9,star10,star11,star12,star13,star14,star15,star16;

function preload(){

  Venus2Img = loadImage("Venus2.jpg");
  venusImg = loadImage("venus.jpg");
 explosionImg = loadImage("bigExplosion.png");
 //cuteImg = loadImage("cute.jpg");
}

function setup() {
  createCanvas(800,400);
   Venus2 = createSprite(500, 200, 50, 50);
   Venus2.shapeColor = "blue";
   //Venus2.addImage(Venus2Img);
   //Venus2.setCollider("circle",0,0,100);
   //Venus2.scale = 0.1;
   //Venus2.debug = true;
   venus = createSprite(80,200,90,80,);
   //venus.addImage(venusImg);
   //venus.scale = 0.2;
   venus.shapeColor = "blue";
    venus.velocityX = 5;
   //venus.setCollider("circle",0,0,100);
   //venus.debug = true;


  star1 = createSprite(220,100,2,2);
  star1.shapeColor = "white";
  star2 = createSprite(90,300,2,2);
  star2.shapeColor = "white";
  star3 = createSprite(40,180,2,2);
  star3.shapeColor = "white";
  star4 = createSprite(310,235,2,2);
  star4.shapeColor = "white";
  star5 = createSprite(600,160,2,2);
  star5.shapeColor = "white";
  star6 = createSprite(775,350,2,2);
  star6.shapeColor = "white";
  star7 = createSprite(549,240,2,2);
  star7.shapeColor = "white";
  star8 = createSprite(680,322,2,2);
  star8.shapeColor = "white";
  star9 = createSprite(520,250,2,2);
  star9.shapeColor = "white";
  star10 = createSprite(556,100,2,2);
  star10.shapeColor = "white";
  star11 = createSprite(280,30,2,2);
  star11.shapeColor = "white";
  star12= createSprite(105,19,2,2);
  star12.shapeColor = "white";
  star13 = createSprite(389,378,2,2);
  star13.shapeColor = "white";
  star14 = createSprite(113,250,2,2);
  star14.shapeColor = "white";
  star15 = createSprite(675,300,2,2);
  star15.shapeColor = "white";
  star16 = createSprite(705,30,2,2);
  star16.shapeColor = "white";
}

function draw() {
  background(0);
  if (Venus2.x - venus.x < Venus2.width/2 + venus.width/2
    && Venus2.x - venus.x < Venus2.width/2 + venus.width/2) {
    
    //Venus2.velocityX = 2;
   // venus.velocityX =-5;
     explosion = createSprite(400,200,20,20);
     explosion.addImage(explosionImg);
    //explosion.visible = true;
   
    }
  drawSprites();
}