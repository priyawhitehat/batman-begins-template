var thunder1,thunder2,thunder3,thunder4;
var walkingframe;
var thunder,walkingman;

var raindrop;


function preload(){
    thunder1=loadImage("images/thunderbolt/1.png");
    thunder2=loadImage("images/thunderbolt/2.png");
    thunder3=loadImage("images/thunderbolt/3.png");
    thunder4=loadImage("images/thunderbolt/4.png");
    
    walkingframe=loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png",
    "images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
    
}

function setup(){
   createCanvas(500,600);
   walkingman=createSprite(200,420);
   walkingman.addAnimation("walking",walkingframe);
   walkingman.scale=0.5;


     
    
}

function draw(){
    background("black");
    createthunder();
   
    drawSprites();
    
}  

function createthunder()
{
    if(frameCount%80===0)
    {
        thunder=createSprite(random(10,370),random(10,30),10,10);
        var rand=Math.round(random(1,4));
        switch(rand)
        {
            case 1:thunder.addImage(thunder1);break;
            case 2:thunder.addImage(thunder1);break;
            case 3:thunder.addImage(thunder1);break;
            case 4:thunder.addImage(thunder1);break;

        }
        thunder.scale=random(0.3,0.6);
        thunder.lifetime=10;
    }
}

