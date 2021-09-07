// allows use to instantiate multiple instance of this object. 
class Heart{
/* Overloading is not supported. 
    constructor(){
        // current position
        this.baseY = -50;
        this.baseX = 0;
        this.circleDiam = 100;
        this.circleRadius = 50;
        this.triangleHeight = 150;
        this.triangleFudge = 8;
        this.color = 0; // greyscale color
        console.log("Heart Created at: " + this.baseX + " " + this.baseY )
    }
*/
    constructor(baseX, baseY, radius, triHeight, triFudge){
        this.baseY = baseX;
        this.baseX = baseY;
        this.circleDiam = radius *2;
        this.circleRadius = radius;
        this.triangleHeight = triHeight;
        this.triangleFudge = triFudge;
        this.color = 0; // greyscale color
        console.log("Heart Created at: " + this.baseX + " " + this.baseY )

    }

    setPosition(x,y){
        this.baseX = x;
        this.baseY = y;
        canvasWrap(); // on by default, could have a toggle.
    }

    translate(x, y){
        this.baseX += x;
        this.baseY += y;
        this.canvasWrap();
    }

    canvasWrap(){
        // --- Wrap Player ---
        // wrap the player around to the other edge
        if(this.baseX < 0){
            this.baseX = width;
        }else if(this.baseX > width){
            this.baseX = 0;
        }

        if(this.baseY < 0){
            this.baseY = height;
        }else if(this.baseY > height){
            this.baseY = 0;
        }
    }

    toString(){
        // requires the "this" keyword
        return this.baseX + ","+ this.baseY;
    }

    // Don't need function here. 
    drawArt() {
        push();
        fill(this.color);
        // set the origin to the center. 
        //translate(width/2, height/2);
        scale(currentScale);
        // add sine wave scaling

        // draw the heart, because it is using the base already, it should work with the
        // translate if we modify baseX and baseY values to compensate
        circle(this.baseX + this.circleRadius, this.baseY, this.circleDiam);
        circle(this.baseX - this.circleRadius, this.baseY, this.circleDiam);
        triangle(this.baseX + this.circleDiam, this.baseY + this.triangleFudge,
            this.baseX - this.circleDiam, this.baseY + this.triangleFudge,
            this.baseX, this.baseY + this.triangleHeight);
        pop(); // ?? 
     //   console.log("In art");
    }
}