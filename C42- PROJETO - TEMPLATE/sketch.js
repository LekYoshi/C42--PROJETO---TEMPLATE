var balloon;
var database;
var height;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage2=loadAnimation("HotAirBallon-01.png","HotAirBallon-01.png",
   "HotAirBallon-02.png","HotAirBallon-02.png","HotAirBallon-03.png","HotAirBallon-03.png")
  }
  

//Function to set initial environment
function setup() {
  
  createCanvas(1500,700);
  database=firebase.database();

  balloon=createSprite(250,650,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage2);
  balloon.scale=0.5;

  heightref=database.ref('balloon/height');
  heightref.on("value",readHeight);
  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    changePosition(-5,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    changePosition(5,0);

  }
  else if(keyDown(UP_ARROW)){
   changePosition(0,-5);
   
  }
  else if(keyDown(DOWN_ARROW)){
  changePosition(0,+5);
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

//Change the position to move the balloon

function changePosition(x,y){
  balloon.x=balloon.x+x;
  balloon.y=balloon.y+y
}


function readHeight(data){
  //Read value using data.val() 
  //Assign to x & y position of balloon
  /*Add your code after this line*/

  
    height= data.val()
    // console.log(position)
    balloon.x = height.x
    balloon.y = height.y


  
  
  /*Add your code before this line*/
}



