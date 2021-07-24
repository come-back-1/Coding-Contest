class star {

	constructor(i) {
		this.depth = map(i,0,gStarCt,10,1000)
		this.posX = random(0, windowWidth);
		this.posY = random(0, windowHeight);
		this.size = 5/this.depth*2;
		this.vel = 2/this.depth / random(1,10);
		if (random() > 0.99 ){
			this.col = color(200,200,0)
		} else {
			this.col = color(200,200,200);
		}
	}

	update() {
		if (this.posX < -3 * this.size) {
			
			this.posX = windowWidth*this.size;
			this.posY = random(0,windowHeight);
		}
		this.posX -= this.vel;
	}

	render() {
	fill(this.col);	
		ellipse(this.posX, this.posY, this.size);
	}
}
