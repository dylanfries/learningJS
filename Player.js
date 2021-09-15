class Player{
	constructor(){
		this.xInput=0;
  		this.yInput=0;
  		this.xPos=200;
  		this.yPos=200;
  		this.rotationAngle =0;
  		this.rotationRads= 0;
  		this.rotationSpeed = 3;
  		this.speed=1;
  		this.radius = 25;

  		// Art
  		this.noseLength = 10;
  		this.wingSpan = 7;
  		this.tailLength = 7;
	}

	setInput(x,y){
		this.xInput = x;
		this.yInput = y; // reverse for canvas
	}

	setPosition(x,y){
		this.xPos = x;
		this.yPos = y;
		canvasWrap();
	}

	/*
	// private
	myTranslate(x,y){
		this.xPos += x;
		this.yPos += y;
		console.log(this.xPos + " " + this.yPos)
		this.canvasWrap();
	}
*/
	// includes multiply by speed and takes in Input
	move(){
		// include rotation
		this.rotationAngle += this.rotationSpeed * this.xInput;
		// convert to rads
		this.rotationRads = 2 * PI * (this.rotationAngle/360.0);

		console.log("Angle: " + this.rotationAngle + " Rads: " + this.rotationRads);


		// Sort of works but pretty sloppy
		//pushMatrix(); //? do i need this if I already am pushing? 
		push();

		//rotate(this.rotationRads);
		// careful, regular "translate() is a p5 method"
		// this one resets the canvas to the current position
		translate(this.xPos, this.yPos);

		// Rotation Calculations
		//angleMode(DEGREES);
		// calculate the future step
		let xOffset = cos(this.rotationAngle) * this.speed;
		let yOffset = sin(this.rotationAngle) * this.speed;
		// draw a line for debugging
		line(0, 0, xOffset * 23, yOffset * 23); // negative because the canvas Y gets bigger as you go down

		// Update the position
		this.xPos += xOffset;
		this.yPos += yOffset;

		this.canvasWrap();

		pop();	
	}

	canvasWrap(){
		if(this.xPos < 0){
			this.xPos = width;
		}else if(this.xPos > width){
			this.xPos = 0;
		}

		if(this.yPos < 0){
			this.yPos = height;
		}else if(this.yPos > height){
			this.yPos = 0;
		}
		//console.log("canvasWrap");
	}

	drawArt(){
		push();
		rectMode(CENTER); // rect origin centered. 
		fill(0,255,0);
		translate(this.xPos, this.yPos); // set origin of canvas
		angleMode(DEGREES);
		// Triangle starts pointing up but 0 degrees rotated is pointing right. 
		rotate(90); // to point to the right 
		rotate(this.rotationAngle);
		// Size
		// reverse since input is up and canvas is down
		//rect(this.xPos, this.yPos , this.radius, this.radius);
		triangle(0, -this.noseLength, 
				this.wingSpan, this.tailLength, 
				-this.wingSpan, this.tailLength);

		/* Tried this first but since I added the translate, I don't need to offset anymore
triangle(this.xPos, this.yPos - this.noseLength, 
				this.xPos + this.wingSpan, this.yPos + this.tailLength, 
				this.xPos - this.wingSpan, this.yPos + this.tailLength);
				*/

		// pivot point
		fill(255,0,0);
		circle(0, 0, 10);

		pop();
	}

	// if the player is closer then distance + radius, it is a hit, return true, else false
	collision(x, y, otherRadius){
		// pyth

		// or distance
		let distance = dist(this.xPos, this.yPos, x, y);
		if(distance < this.radius + otherRadius){
			return true;
		}else{
			return false;
		}
	}
}