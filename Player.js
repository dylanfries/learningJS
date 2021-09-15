class Player{
	constructor(){
		// Control Variables
		this.rotationSpeed = 3;
  		this.speed=1;

		// Input
		this.inputVector = createVector(0,0);//new PVector(0,0);

		// position
  		this.position = createVector(200,200);//new PVector(200,200);

  		// Rotation
  		this.rotationAngle =0;
  		this.rotationRads= 0;

  		// Collision Radius
  		this.radius = 25;

  		// Art
  		this.noseLength = 10;
  		this.wingSpan = 7;
  		this.tailLength = 7;
	}

	setInput(x,y){
		this.inputVector.set(x,y);
	}

	setPosition(x,y){
		this.position.set(x,y);
		canvasWrap();
	}

	// includes multiply by speed and takes in Input
	move(){
		// include rotation
		this.rotationAngle += this.rotationSpeed * this.inputVector.x;
		// convert to rads
		this.rotationRads = 2 * PI * (this.rotationAngle/360.0);

		console.log("Angle: " + this.rotationAngle + " Rads: " + this.rotationRads);


		// Sort of works but pretty sloppy
		//pushMatrix(); //? do i need this if I already am pushing? 
		push();

		//rotate(this.rotationRads);
		// careful, regular "translate() is a p5 method"
		// this one resets the canvas to the current position
		translate(this.position.x, this.position.y);

		// Rotation Calculations
		//angleMode(DEGREES);
		// calculate the future step
		let xOffset = cos(this.rotationAngle) * this.speed;
		let yOffset = sin(this.rotationAngle) * this.speed;
		// draw a line for debugging
		line(0, 0, xOffset * 23, yOffset * 23); // negative because the canvas Y gets bigger as you go down

		// Update the position
		this.position.x += xOffset;
		this.position.y += yOffset;

		this.canvasWrap();

		pop();	
	}

	canvasWrap(){
		if(this.position.x < 0){
			this.position.x = width;
		}else if(this.position.x > width){
			this.position.x = 0;
		}

		if(this.position.y < 0){
			this.position.y = height;
		}else if(this.position.y > height){
			this.position.y = 0;
		}
		//console.log("canvasWrap");
	}

	drawArt(){
		push();
		rectMode(CENTER); // rect origin centered. 
		fill(0,255,0);
		translate(this.position.x, this.position.y); // set origin of canvas
		angleMode(DEGREES);
		// Triangle starts pointing up but 0 degrees rotated is pointing right. 
		rotate(90); // to point to the right 
		rotate(this.rotationAngle);
		// Size
		// reverse since input is up and canvas is down
		//rect(this.position.x, this.position.y , this.radius, this.radius);
		triangle(0, -this.noseLength, 
				this.wingSpan, this.tailLength, 
				-this.wingSpan, this.tailLength);

		/* Tried this first but since I added the translate, I don't need to offset anymore
triangle(this.position.x, this.position.y - this.noseLength, 
				this.position.x + this.wingSpan, this.position.y + this.tailLength, 
				this.position.x - this.wingSpan, this.position.y + this.tailLength);
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
		let distance = dist(this.position.x, this.position.y, x, y);
		if(distance < this.radius + otherRadius){
			return true;
		}else{
			return false;
		}
	}
}