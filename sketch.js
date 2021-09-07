
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

let h;

let input = null;

function setup() {
  // 400 px x 400px
  createCanvas(400, 400); 

  h = new Heart();
  console.log(h);
  console.log(h.toString());
  
  // Defining an input object for the keyboard axis
  // similar but difference way then using the constructor based approach above. 
  input = {
    // no let for instance vars
    xKeys : 0,
    // also commas not ;
    yKeys : 0,
    
    update: function(){
      if( keyIsPressed){
        if(keyIsDown(UP_ARROW)){
          this.yKeys = 1;
        }else if(keyIsDown(DOWN_ARROW)){
          this.yKeys = -1;
        }else{
          this.yKeys = 0;
        }

        if(keyCode === LEFT_ARROW){
          this.xKeys = -1;
        }else if(keyCode === RIGHT_ARROW){
          this.xKeys = 1;
        }else{
          this.xKeys = 0;
        }
      }
    },// comma at the end. 

    getXAxis: function(){
      return this.xKeys;
    },

    getYAxis: function(){
      return this.yKeys;
    },

    // returns the axis as a String in the format (x,y)
    toString: function(){
      return `(${this.xKeys},${this.yKeys})`;
    },
  }; // end of input object

}// end function setup

function draw() {

  // Update input object with current keyboard state
  input.update();
  // Keyboard Debugging. 
  //console.log(input.toString());
  //console.log("x: " + input.getXAxis() + " y: " + input.getYAxis());

  // timing, deltaTime is the time since the last frame or the inverse of the framerate 
  timer += deltaTime;

  // -- sine wave for background --- 
  // requires timer var
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

  // ---  Mouse Input --- 
  // https://stungeye.github.io/Applied-Math-For-Games-1/docs/04-introduction-to-processing/03-user-input.html
  let xPos = constrain(mouseX, 0, width);
  let yPos = constrain(mouseY, 0, height);

  // Circle that follows the mouse
  // map function
  let circleSize = 50;
  // map 0-width to 0-255
  let red = map(xPos, 0, width, 0, 255);
  let green = map(yPos, 0, height, 0, 255);
  fill(255, 0, 0);
  ellipseMode(CENTER); // sets ellipses, arcs and circles to use the center position as a origin
  circle(xPos, yPos, sineY * circleSize);


  // --- Background --- 
  h.drawArt(); // Heart object

  
  // --- Draw player cube ---
  // Update player movement. 
  player.xPos += input.getXAxis() * player.xSpeed;
  player.yPos += input.getYAxis() * player.ySpeed * -1; // make Up go up in the window. 

  rectMode(CENTER); // rect origin centered. 
  fill(0,255,0); // green square

  // --- Wrap Player ---
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
