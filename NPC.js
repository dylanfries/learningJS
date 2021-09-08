class NPC{

	constructor(image, xPos, yPos, scaleFactor){
		this.image = image;
		this.xPos = xPos;
		this.yPos = yPos;
		this.scaleFactor = scaleFactor;
		this.image = image;
		this.image.resize(this.image.width * this.scaleFactor, this.image.height * this.scaleFactor);
	}

	initialize(){
		
	}

/*
	loadImage(){
		loadImage(this.imageSourcePath);// call back for loaded and ready
	}

	// also scale
	setImage(image){
		this.image = image;
		this.image.resize(image.width * scaleFactor, image.height * scaleFactor);
	}
*/
	drawArt(){
		push(); //not necessary yet but will be useful if I am transforming it later. 
		image(this.image, this.xPos, this.yPos);
		pop();
	}

	getPath(){
		return imageSourcePath;
	}

// trying this out
// https://stungeye.github.io/Applied-Math-For-Games-1/docs/05-advanced-javascript/06-destructuring.html
	getPosition(){
		let xy = [xPos,yPos];
		return xy;
	}

	getXPos(){
		return xPos;
	}

	getYPos(){
		return yPos;
	}






}