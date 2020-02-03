var PLAY = 1;
var END = 0;
var gameState = PLAY;
var background1;
var plasticPack,bottles,usedPaper;
var foodWaste,carton,eggShells;
var dryWasteBin,wetWasteBin;
var milk,juice,cof,pizza,bread,soda,leaves,fabric;
var youWin,dryBinText,wetWasteText;
var score = 0;


function preload(){
    bottlesImg = loadImage("crushedBottle.png");
    dryWasteBinImg = loadImage("blueBin1.png");
    backgroundImg = loadImage("niceCity.png");
    foodWasteImg = loadImage("food waste1.png");
    plasticPackImg = loadImage("chips.png");
    cartonImg = loadImage("wp.png");
    eggShellsImg = loadImage("eggShells.png");
    usedPaperImg = loadImage("usedPaper.png");
    wetWasteBinImg = loadImage("greenBin1.png");
    milkImg = loadImage("milk.png");
    juiceImg = loadImage("juice.png");
    cofImg = loadImage("cuppaCoffee.png");
    pizzaImg = loadImage("pizza.png");
    bImg = loadImage("bread.png");
    sodaImg = loadImage("soda.png");
    leavesImg = loadImage("leaves.png");
    fabricImg = loadImage("old fabric.png");
    scoreImg = loadImage("new1.png");
    youWinImg = loadImage("youWin.png");
    dryBinTextImg = loadImage("DRY.png");
    wetWasteTextImg = loadImage("WET.png");

}
function setup(){
    createCanvas(990,741);
    background1 = createSprite(480,390,800,400);
    background1.addImage(backgroundImg);
    background1.scale = 1.03;
    background1.depth = background1.depth - 111100;

    background("firebrick"); 

    youWin = createSprite(450,500,10,10);
    youWin.addImage(youWinImg);
    youWin.visible = false;
    
    wetWasteBin = createSprite(250,510,80,90);
    wetWasteBin.addImage(wetWasteBinImg);
    wetWasteBin.scale = 0.52;
    wetWasteBin.setCollider("circle",0,0,80);

    wetWasteText = createSprite(273,587,80,90);
    wetWasteText.addImage(wetWasteTextImg);
    wetWasteText.scale = 0.38;

    dryWasteBin = createSprite(150,510,80,90);
    dryWasteBin.addImage(dryWasteBinImg);
    dryWasteBin.scale = 0.56;
    dryWasteBin.setCollider("circle",0,0,4);

    dryBinText = createSprite(140,580,10,20);
    dryBinText.addImage(dryBinTextImg);
    dryBinText.scale = 0.34;
   
    foodWaste = createSprite(218,689,20,30);
    foodWaste.addImage(foodWasteImg);
    foodWaste.scale = 0.2;
    foodWaste.setCollider("circle",0,0,100);

    plasticPack = createSprite(720,680,20,30);
    plasticPack.addImage(plasticPackImg);
    plasticPack.scale = 0.2;
    plasticPack.setCollider("circle",0,0,100);
   
    bottles = createSprite(678,550,10,30);
    bottles.addImage(bottlesImg);
    bottles.scale = 0.08;
    bottles.setCollider("circle",0,0,200);

    carton = createSprite(245,660,10,20);
    carton.addImage(cartonImg);
    carton.scale = 0.14;
    carton.setCollider("circle",0,0,100);

    eggShells = createSprite(40,560,20,10);
    eggShells.addImage(eggShellsImg);
    eggShells.scale = 0.1;
    eggShells.setCollider("circle",0,0,100);


    usedPaper = createSprite(600,550,10,10);
    usedPaper.addImage(usedPaperImg);
    usedPaper.scale = 0.1;
    usedPaper.setCollider("circle",10,0,100);

    leaves = createSprite(850,680,10,20);
    leaves.addImage(leavesImg);
    leaves.scale = 0.3;
    leaves.setCollider("circle",0,0,100);

    juice = createSprite(740,536,20,30);
    juice.addImage(juiceImg);
    juice.scale = 0.4;
    juice.setCollider("circle",0,0,100);

    milk = createSprite(105,680,10,20);
    milk.addImage(milkImg);
    milk.scale = 0.17;
    milk.setCollider("circle",0,0,100);

    cof = createSprite(25,610,10,20);
    cof.addImage(cofImg);
    cof.scale = 0.17;
    cof.setCollider("circle",0,0,100);

    pizza = createSprite(910,715,10,20);
    pizza.addImage(pizzaImg);
    pizza.scale = 0.14;
    pizza.setCollider("circle",0,0,100);

    bread = createSprite(55,620,10,20);
    bread.addImage(bImg);
    bread.scale = 0.3;
    bread.setCollider("circle",0,0,100);


    soda = createSprite(134,690,10,20);
    soda.addImage(sodaImg);
    soda.scale = 0.1;
    soda.setCollider("circle",0,0,100);

    fabric = createSprite(800,540,10,20);
    fabric.addImage(fabricImg);
    fabric.scale = 0.17;
    fabric.setCollider("circle",0,0,100);
}

function draw(){

  background(178,34,34); 

    if(gameState === PLAY){
      
         if(mousePressedOver(soda)){
           soda.x = World.mouseX;
           soda.y = World.mouseY;
           }

           if(mousePressedOver(milk)){
            milk.x = World.mouseX;
            milk.y = World.mouseY;
            }
            if(mousePressedOver(carton)){
                carton.x = World.mouseX;
                carton.y = World.mouseY;
                }

             if(mousePressedOver(cof)){
               cof.x = World.mouseX;
               cof.y = World.mouseY;
                    }
             if(mousePressedOver(leaves)){
                leaves.x = World.mouseX;
                leaves.y = World.mouseY;
                 }     
    
             if(mousePressedOver(usedPaper)){
                 usedPaper.x = World.mouseX;
                 usedPaper.y = World.mouseY;
                 }
             if(mousePressedOver(bread)){
               bread.x = World.mouseX;
               bread.y = World.mouseY;
                 }

             if(mousePressedOver(fabric)){
                fabric.x = World.mouseX;
                fabric.y = World.mouseY;
                }
           
             if(mousePressedOver(pizza)){
               pizza.x = World.mouseX;
               pizza.y = World.mouseY;
            }          
            
            if(mousePressedOver(plasticPack)){
                plasticPack.x = World.mouseX;
                plasticPack.y = World.mouseY;
                
                }  
                
            if(mousePressedOver(bottles)){
                bottles.x = World.mouseX;
                bottles.y = World.mouseY;
                }

             if(mousePressedOver(eggShells)){
             eggShells.x = World.mouseX;
             eggShells.y = World.mouseY;
                    }  
              
             if(mousePressedOver(juice)){
               juice.x = World.mouseX;
               juice.y = World.mouseY;
                    } 
                    
            if(mousePressedOver(foodWaste)){
                 foodWaste.x = World.mouseX;
                 foodWaste.y = World.mouseY;
                        }  
                    

           if(plasticPack.isTouching(dryWasteBin)) {
           plasticPack.destroy();
           score = score+1;
          }

          if(bottles.isTouching(dryWasteBin) ){
            bottles.destroy();
         }
          if(foodWaste.isTouching(wetWasteBin) ){
            foodWaste.destroy();
            score = score+1;
            }
    
          if(eggShells.isTouching(wetWasteBin) ){
            eggShells.destroy();
            score = score+1;
        }
        if(carton.isTouching(dryWasteBin) ){
           carton.destroy();
           score = score+1;
         }
         if(usedPaper.isTouching(wetWasteBin)){
             usedPaper.destroy();
             score = score+1;
         }
         
         if(milk.isTouching(dryWasteBin)){
            milk.destroy();
            score = score+1;
        }

        if(cof.isTouching(dryWasteBin)){
            cof.destroy();
            score = score+1;
        }
        
        if(soda.isTouching(dryWasteBin)){
           soda.destroy();
           score = score+1;
        }

        if(bread.isTouching(wetWasteBin)){
            bread.destroy();
            score = score+1;
         }

         if(juice.isTouching(dryWasteBin)){
            juice.destroy();
            score = score+1;
         }

         if(pizza.isTouching(dryWasteBin)){
            pizza .destroy();
            score = score+1;
         }

         if(leaves.isTouching(wetWasteBin)){
            leaves.destroy();
            score = score+1;
        }

        if(fabric.isTouching(dryWasteBin)){
            fabric.destroy();
            score =  score+1;
        }

        if(foodWaste.isTouching(dryWasteBin) ){    
            foodWaste.bounceOff(dryWasteBin);
            dryWasteBin.setCollider("circle",0,0,60);
            foodWaste.x = 218;
            foodWaste.y = 689;
        }else{
          dryWasteBin.setCollider("circle",0,0,4);  
        }
        if(leaves.isTouching(dryWasteBin) ){
            leaves.bounceOff(dryWasteBin);
            dryWasteBin.setCollider("circle",0,0,60);
            leaves.x = 864;
            leaves.y = 680;
        }else{
          dryWasteBin.setCollider("circle",0,0,4);  
        }
        if(bread.isTouching(dryWasteBin) ){
            bread.bounceOff(dryWasteBin);
            dryWasteBin.setCollider("circle",0,0,60);
            bread.x = 55;
            bread.y = 620;
        }else{
          dryWasteBin.setCollider("circle",0,0,4);  
        }
        if(usedPaper.isTouching(dryWasteBin) ){
            usedPaper.bounceOff(dryWasteBin);
            dryWasteBin.setCollider("circle",0,0,60);
            usedPaper.x = 600;
            usedPaper.y = 550;
        }else{
          dryWasteBin.setCollider("circle",0,0,4);  
        }

        if(eggShells.isTouching(dryWasteBin) ){
            eggShells.bounceOff(dryWasteBin);
            dryWasteBin.setCollider("circle",0,0,60);
            eggShells.x = 40;
            eggShells.y = 560;
        }else{
          dryWasteBin.setCollider("circle",0,0,4);  
        }

        if(carton.isTouching(wetWasteBin) ){
            carton.bounceOff(wetWasteBin);
            wetWasteBin.setCollider("circle",0,0,60);
            carton.x = 245;
            carton.y = 660;
        }else{
          wetWasteBin.setCollider("circle",0,0,4);  
        }

        if(plasticPack.isTouching(wetWasteBin) ){
            plasticPack.bounceOff(wetWasteBin);
            wetWasteBin.setCollider("circle",0,0,60);
            plasticPack.x = 720;
            plasticPack.y = 680;
        }else{
          wetWasteBin.setCollider("circle",0,0,4);  
        }

        if(milk.isTouching(wetWasteBin) ){
            milk.bounceOff(wetWasteBin);
            wetWasteBin.setCollider("circle",0,0,60);
            milk.x = 105;
            milk.y = 680;
        }else{
          wetWasteBin.setCollider("circle",0,0,4);  
        }

        if(cof.isTouching(wetWasteBin) ){
            cof.bounceOff(wetWasteBin);
            wetWasteBin.setCollider("circle",0,0,60);
            cof.x = 25;
            cof.y = 610;
        }else{
          wetWasteBin.setCollider("circle",0,0,4);  
        }

        if(pizza.isTouching(wetWasteBin) ){
            pizza.bounceOff(wetWasteBin);
            wetWasteBin.setCollider("circle",0,0,60);
            pizza.x = 940;
            pizza.y = 715;
        }else{
          wetWasteBin.setCollider("circle",0,0,4);  
        }

        if(juice.isTouching(wetWasteBin) ){
            juice.bounceOff(wetWasteBin);
            wetWasteBin.setCollider("circle",0,0,60);
            juice.x = 745;
            juice.y = 532;
        }else{
          wetWasteBin.setCollider("circle",0,0,4);  
        }

        if(soda.isTouching(wetWasteBin) ){
            soda.bounceOff(wetWasteBin);
            wetWasteBin.setCollider("circle",0,0,60);
            soda.x = 134;
            soda.y = 690;
        }else{
          wetWasteBin.setCollider("circle",0,0,4);  
        }
        
        if(fabric.isTouching(wetWasteBin) ){
          fabric.bounceOff(wetWasteBin);
          wetWasteBin.setCollider("circle",0,0,60);
          fabric.x = 800;
          fabric.y = 540;
      }else{
        wetWasteBin.setCollider("circle",0,0,4);  
      }

        if(bottles.isTouching(wetWasteBin) ){
            bottles.bounceOff(wetWasteBin);
            wetWasteBin.setCollider("circle",0,0,60);
            bottles.x = 678;
            bottles.y = 550;
        }else{
          wetWasteBin.setCollider("circle",0,0,4);  
        }
    

    if(score === 13){
      youWin.visible = true;
    
   }
  }
   
    //console.log(playAgain);
    
    drawSprites();
    textFont("SHOWCARD GOTHIC");
    textSize(40);
    fill("black");
    //strokeWeight(5);
    text("SCORE : "+ score,800,35);
    text("THE THRASHBUSTER",10,35);

}

