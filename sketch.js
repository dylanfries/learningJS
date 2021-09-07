
// define the heart object
let heart = {
    baseY : -50, // y starting offset
    baseX : 0, // x starting offset
    circleDiam : 100, // diam 
    circleRadius : 50, // should be half of diam, not the best design
    triangleHeight : 150,
    triangleFudge : 8, // so the top edges line up with the circles
    color : 0, // in greyscale, 0 is black
  }

let player = {
  xInput:0,
  yInput:0,
  xPos:200,
  yPos:200,
  xStart:200,
  yStart:200,
  rotationRads: 0,

  xSpeed:1,
  ySpeed:1,
}

// base scale used for transformation
let currentScale = 1;

// Timer since start of running, used for sine wave
let timer = 0;
// Sine wave settings
let sineFrequency = 1/500;
let sineAmplitude = 1/2;

function setup() {
  // 400 px x 400px
  createCanvas(400, 400); 

  console.log(heart);
  
}

function draw() {
  
  // timing, deltaTime is the time since the last frame or the inverse of the framerate 
  timer += deltaTime;

  // make it get bigger and smaller
  let sineY = sineAmplitude * sin(timer * sineFrequency);
  //console.log(timer + " " + sineY);

  // lets make the background fancier

  let rPhase =255/3;
  let gPhase = 255 * 2/3;

  let r = sineAmplitude * sin(timer * sineFrequency + rPhase);
  let g = sineAmplitude * sin(timer * sineFrequency / 2 + gPhase);
  let b = sineAmplitude * sin(timer * sineFrequency / 5);

  background( r * 255 , g * 255, b * 255 );

  fill(heart.color);

  push();
    // set the origin to the center. 
  translate(width/2, height/2);
  scale(currentScale + sineY);

 

// draw the heart, because it is using the base already, it should work with the
// translate if we modify baseX and baseY values to compensate
  circle(heart.baseX + heart.circleRadius, heart.baseY, heart.circleDiam);
  circle(heart.baseX - heart.circleRadius, heart.baseY, heart.circleDiam);
  triangle(heart.baseX + heart.circleDiam, heart.baseY + heart.triangleFudge,
      heart.baseX - heart.circleDiam, heart.baseY + heart.triangleFudge,
      heart.baseX, heart.baseY + heart.triangleHeight);
 pop(); // ?? 
/* Original version
  circle(150,150,100);
  circle(250,150,100);
  triangle(100,158, 300,158, 200, 300);
*/
  
  // Input
  // https://stungeye.github.io/Applied-Math-For-Games-1/docs/04-introduction-to-processing/03-user-input.html
  let xPos = constrain(mouseX, 0, width);
  let yPos = constrain(mouseY, 0, height);


  // manually reverse the orientation settings
  //translate(-width/2, -height/2);
  //scale(currentScale + sineY);// prbably fine
  //scale(currentScale);

  // Circle that follows the mouse
  // map function
  let circleSize = 50;
  // map 0-width to 0-255
  let red = map(xPos, 0, width, 0, 255);
  let green = map(yPos, 0, height, 0, 255);
  fill(255, 0, 0);
  ellipseMode(CENTER); // sets ellipses, arcs and circles to use the center position as a origin
  circle(xPos, yPos, sineY * circleSize);


  // ---------- Keyboard input -----------
  let xKeys = 0;
  let yKeys = 0;
  if( keyIsPressed){
    if(keyIsDown(UP_ARROW)){
      yKeys = 1;
    }else if(keyIsDown(DOWN_ARROW)){
      yKeys = -1;
    }

    if(keyCode === LEFT_ARROW){
      xKeys = -1;
    }else if(keyCode === RIGHT_ARROW){
      xKeys = 1;
    }
  }
  

  console.log("x: " + xKeys + " y: " + yKeys);

  // Update player movement. 
  player.xPos += xKeys * player.xSpeed;
  player.yPos += yKeys * player.ySpeed * -1; // make Up go up in the window. 

  rectMode(CENTER); // rect origin centered. 
  fill(0,255,0); // green

  // wrap the player around to the other edge
  if(player.xPos < 0){
    player.xPos = width;
  }else if(player.xPos > width){
    player.xPos = 0;
  }

  if(player.yPos < 0){
    player.yPos = height;
  }else if(player.yPos > height){
    player.yPos = 0;
  }


  rect(player.xPos, player.yPos, 25,25);
}
  // ---------- Keyboard input -----------
  // on down 
  /*
function keyPressed(){
  let xKeys = 0;
  let yKeys = 0;

  // pressed once
  // note : i have 1 being down, which is not how I would usually do it. 
  if(keyCode === UP_ARROW){
    yKeys = 1;
  }else if(keyCode === DOWN_ARROW){
    yKeys = -1;
  }

  if(keyCode === LEFT_ARROW){
    xKeys = -1;
  }else if(keyCode === RIGHT_ARROW){
    xKeys = 1;
  }

  console.log("x: " + xKeys + " y: " + yKeys);

  // Update player movement. 
  player.xPos += xKeys * player.xSpeed;
  player.yPos += yKeys * player.ySpeed;

  rectMode(CENTER); // rect origin centered. 
  fill(0,255,0); // green
  rect(player.xPos, player.yPos, 25,25);
}
*/