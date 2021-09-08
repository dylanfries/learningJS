class UI{
	constructor(){
		this.currentHearts = 0;
		this.maxHearts = 10;
		this.currentTime = 0;
		this.hearts = [];
	}

	addHeart(){
		this.hearts.push(new Heart(0,0, 5,15,1));
	}

	clearUI(){
		this.hearts = [];
	}

	drawArt(){

		push();
		fill(255,0,0);
		for(let i = 0 ; i < this.hearts.length; i++){
			let h = this.hearts[i];
			h.setPosition(h.getRadius()*4*(i+1), h.getRadius() * 2 );
			h.drawArt();
		}
		pop();
	}
}