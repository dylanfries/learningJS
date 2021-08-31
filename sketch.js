
// define the heart object
let heart = {
    baseY : -50,
    baseX : 0,
    circleDiam : 100,
    circleRadius : 50,
    triangleHeight : 150,
    triangleFudge : 8,
    color : 0,
  }

let currentScale = 1;
let timer = 0;
let sineFrequency = 1/500;
let sineAmplitude = 1/2;

function setup() {
  // 400 px x 400px
  createCanvas(400, 400);
  

  console.log(heart);
  
}

function draw() {
  
  background(220);

  fill(heart.color);

    // set the origin to the center. 
  translate(width/2, height/2);

  // timing 
  timer += deltaTime;

  // make it get bigger and smaller
  let y = sineAmplitude * sin(timer * sineFrequency);
  console.log(timer + " " + y);
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