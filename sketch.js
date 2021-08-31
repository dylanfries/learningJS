
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
  
  // make it get bigger and smaller
  let y = sineAmplitude * sin(timer * sineFrequency);
  console.log(timer + " " + y);

  // lets make the background fancier

  let rPhase =255/3;
  let gPhase = 255 * 2/3;

  let r = sineAmplitude * sin(timer * sineFrequency + rPhase);
  let g = sineAmplitude * sin(timer * sineFrequency / 2 + gPhase);
  let b = sineAmplitude * sin(timer * sineFrequency / 5);

  background( r * 255 , g * 255, b * 255 );

  fill(heart.color);

    // set the origin to the center. 
  translate(width/2, height/2);

  // timing 
  timer += deltaTime;


  scale(currentScale + y);

// draw the heart, because it is using the base already, it should work with the
// translate if we modify baseX and baseY values to compensate
  circle(heart.baseX + heart.circleRadius, heart.baseY, heart.circleDiam);
  circle(heart.baseX - heart.circleRadius, heart.baseY, heart.circleDiam);
  triangle(heart.baseX + heart.circleDiam, heart.baseY + heart.triangleFudge,
      heart.baseX - heart.circleDiam, heart.baseY + heart.triangleFudge,
      heart.baseX, heart.baseY + heart.triangleHeight);

/*
  circle(150,150,100);
  circle(250,150,100);
  triangle(100,158, 300,158, 200, 300);
*/
}