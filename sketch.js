var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3;

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(400,200,50,80);
  movingRect=createSprite(400,200,80,50);

  gameObject1=createSprite(100,50,50,50);
  gameObject2=createSprite(200,50,50,50);
  gameObject3=createSprite(300,50,50,50);

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

  gameObject1.shapeColor="green";
  gameObject2.shapeColor="green";
  gameObject3.shapeColor="green";
}

function draw() {
  background(0);  

  if (collide(movingRect,gameObject2)===true){
    gameObject2.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else{
      
      gameObject2.shapeColor="green";
      movingRect.shapeColor="green";
      }

      if (collide(movingRect,gameObject3)===true){
        gameObject3.shapeColor="blue";
        movingRect.shapeColor="blue";
      }
      else{
          
          gameObject3.shapeColor="green";
          movingRect.shapeColor="green";
          }


  movingRect.x = World.mouseX;
  movingRect.y=World.mouseY;

  drawSprites();
}

function collide(obj1,obj2){
  if(obj1.x-obj2.x<=obj1.width/2+obj2.width/2  &&
    obj2.x-obj1.x<= obj1.width/2+obj2.width/2  &&
    obj1.y-obj2.y<=obj1.height/2+obj2.height/2 &&
    obj2.y-obj1.y<=obj1.height/2+obj2.height/2
    ){

    return true;
  }

  else{
      
      return false;
     }

}