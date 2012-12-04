function Obstacle(x0, y0) {
	this.isKilled = false;
	this.origin_x = x0;
	this.origin_y = y0;

	this.front;
	this.rear;

	this.nodeNum = 20;
	this.dx;
	this.dy;

	this.init();

}

Obstacle.prototype.init = function(){};

Obstacle.prototype.restart = function(x0, y0) {
	this.isKilled = false;
};

Obstacle.prototype.isNear = function(bicycle) {
	var dist = this.front - bicycle.y;
	var length = this.rear - this.front;

	if(  -bicycle.bb-bicycle.t-length <= dist && dist <= bicycle.bf ) {
		return true;
	}
	else {	
		return false;
	}
};

Obstacle.prototype.judgeCollision = function(bicycle) {
	if( this.isNear(bicycle) ) {
		for(var i=0; i<this.nodeNum; i++) {
			var x = this.origin_x + this.dx[i];
			var y = this.origin_y + this.dy[i];

			if( bicycle.blade_isCollided(x, y) ) {
				bicycle.isBladeless = true;
				//PS.sound.playSound(4);
			}

			if( bicycle.bicycle_isCollided(x, y) ) {
				bicycle.isKilled = true;
			}
		}
	}
};



/**********************Obstacle Sphere Object**************************/
function Obstacle_sphere(x0, y0, rad0) {
	this.isKilled = false;
	this.origin_x = x0;
	this.origin_y = y0;
	this.rad = rad0;

	this.front = y0 - rad0;
	this.rear  = y0 + rad0;
	this.nodeNum = 20;
	this.dx;
	this.dy;

	this.init();
};

Obstacle_sphere.prototype.__proto__ = Obstacle.prototype;

Obstacle_sphere.prototype.init = function() {
	this.dx = new Array(this.nodeNum);
	this.dy = new Array(this.nodeNum);

	var PI2 = 2*Math.PI;
	for(var i=0; i<this.nodeNum; i++) {
		this.dx[i] = this.rad * Math.cos(PI2/i);
		this.dy[i] = this.rad * Math.sin(PI2/i);
	}
};

Obstacle_sphere.prototype.drawing = function(bicycle, ctx, cvs) {
	var dist = this.origin_y - bicycle.y;
	var bbl = bicycle.bicLine;

	img = PS.img.obstacle_1;
	ctx.drawImage(img, this.origin_x-this.rad,
		bbl-dist-this.rad, 2*this.rad, 2*this.rad);


};

Obstacle_sphere.prototype.main = function(bicycle, ctx, cvs) {
	this.judgeCollision(bicycle);	
	this.drawing(bicycle, ctx, cvs);
};



/**********************Obstacle Sphere Object**************************/
function Obstacle_line(x0, y0, l0, rad0) {
	this.isKilled = false;
	this.origin_x = x0;
	this.origin_y = y0;
	this.l = l0;
	this.rad = rad0;

	this.front;
	this.rear;
	this.nodeNum = 12;
	this.dx;
	this.dy;

	this.init();
};

Obstacle_line.prototype.__proto__ = Obstacle.prototype;

Obstacle_line.prototype.frontAndRearPoint = function() {
	this.front = this.origin_y;
	this.rear  = this.origin_y;

	for(var i=0; i<this.nodeNum; i++) {
		if(this.front > this.origin_y + this.dy[i]) {
			this.front = this.origin_y + this.dy[i];
		}
		if(this.rear < this.origin_y + this.dy[i]) {
			this.rear = this.origin_y + this.dy[i];
		}
	}
};

Obstacle_line.prototype.init = function() {
	this.dx = new Array(this.nodeNum);
	this.dy = new Array(this.nodeNum);

	for(var i=0; i<this.nodeNum; i++) {
		this.dx[i] = this.l*i/(this.nodeNum-1) * Math.cos(this.rad);
		this.dy[i] = this.l*i/(this.nodeNum-1) * Math.sin(this.rad);
	}

	this.frontAndRearPoint();
};

Obstacle_line.prototype.drawing = function(bicycle, ctx, cvs) {
	var dist = this.origin_y - bicycle.y;
	var bbl = bicycle.bicLine;

	if( -(cvs.height-bbl) < dist && dist < bbl ) {

		var x0 = this.origin_x;
		var y0 = bbl-dist;
		var x1 = this.origin_x + this.dx[this.nodeNum-1];
		var y1 = y0 - this.dy[this.nodeNum-1];

		ctx.beginPath();            
		ctx.lineWidth = 5;         
		ctx.strokeStyle="rgb(20, 20, 20)"; 
		ctx.moveTo(x0, y0);
		ctx.lineTo(x1, y1);       
		ctx.stroke();                
	}
	
};

Obstacle_line.prototype.main = function(bicycle, ctx, cvs) {
	this.judgeCollision(bicycle);	
	this.drawing(bicycle, ctx, cvs);
};
