
// define the heart object
let heart = {
    baseY : 150,
    baseX : 200,
    circleDiam : 100,
    circleRadius : 50,
    triangleHeight : 150,
    triangleFudge : 8,
    color : 0,
  }



function setup() {
  // 400 px x 400px
  createCanvas(400, 400);
  
  console.log(heart);
  
}

function draw() {
  //background(220);

  fill(heart.color);

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