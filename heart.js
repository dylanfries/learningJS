
class Heart{


    constructor(){
        this.baseY = -50;
        this.baseX = 0;
        this.circleDiam = 100;
        this.circleRadius = 50;
        this.triangleHeight = 150;
        this.triangleFudge = 8;
        this.color = 0; // greyscale color
        console.log("Heart Created at: " + this.baseX + " " + this.baseY )
    }

    toString(){
        // requires the "this" keyword
        return this.baseX + ","+ this.baseY;
    }

    drawArt() {
        push();
        fill(this.color);
        // set the origin to the center. 
        translate(width/2, height/2);
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
      //  console.log("In art");
    }
}