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
        this.isExploding = false;
        this.explodeTimerCurrent = 30;
        this.isDestroyed = false;
        this.currentScale = 1;
    }

    getXAxis(){
        return this.baseX;
    }

    getYAxis(){
        return this.baseY;
    }

    getRadius(){
        return this.circleRadius
    }

    setPosition(x,y){
        this.baseX = x;
        this.baseY = y;
        this.canvasWrap(); // on by default, could have a toggle.
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

        // are we currently exploding?
        if(this.isExploding){
            this.explodeTimerCurrent--;
            if(this.explodeTimerCurrent < 1){
                this.isExploding = false;
                this.destroySelf();
                return;
            }else{
               this.currentScale *= 1.1; 
               console.log(this.currentScale);
            }
        }

        //translate(width/2, height/2);

        //imageMode(CENTER);

        translate(this.baseX, this.baseY);
        scale(this.currentScale);
        // add sine wave scaling
        
        // draw the heart, because it is using the base already, it should work with the
        // translate if we modify baseX and baseY values to compensate
        // if we are setting the translate of the canvas to the base, we can remove it?
        // this is a little strange but much simpler. 
        circle(this.circleRadius, 0, this.circleDiam);
        circle(-this.circleRadius, 0, this.circleDiam);
        triangle(this.circleDiam, this.triangleFudge,
            -this.circleDiam, this.triangleFudge,
            0, this.triangleHeight);
        
        pop(); // need to undo settings (translate, scale, fill etc)

    }

    explode(){
        this.isExploding = true;
    }

    isExplodingNow(){
        return this.isExploding;
    }

    destroySelf(){
        this.isDestroyed = true;
    }

    isDestroyedNow(){
        return this.isDestroyed;
    }
}