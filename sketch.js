//Create variables here
var dog, happyDog, normDog, database, foodS, foodStock;



function preload()
{
  happyDog = loadImage("happydog.png");
  normDog = loadImage("Dog.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,20,20);
  dog.addImage(normDog);
  dog.scale = 0.15;
  foodStock = database.ref('Food')
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  //add styles here
  if(keyWentUp(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}