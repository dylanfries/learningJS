class Player{
	constructor(){
		this.xInput=0;
  		this.yInput=0;
  		this.xPos=200;
  		this.yPos=200;
  		this.rotationRads= 0;
  		this.xSpeed=1;
  		this.ySpeed=1;
	}

	setInput(x,y){
		this.xInput = x;
		this.yInput = y * -1; // reverse for canvas
	}

	setPosition(x,y){
		this.xPos = x;
		this.yPos = y;
		canvasWrap();
	}

	translate(x,y){
		this.xPos += x;
		this.yPos += y;
	//	console.log(this.xPos + " " + this.yPos)
		this.canvasWrap();
	}

	// includes multiply by speed and takes in Input
	move(){
		this.translate(this.xSpeed * this.xInput, 
					this.ySpeed * this.yInput);
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
	}

	drawArt(){
		push();
		rectMode(CENTER); // rect origin centered. 
		fill(0,255,0);
		// Size
		// reverse since input is up and canvas is down
		rect(this.xPos, this.yPos , 25, 25);
		pop();
	}
}