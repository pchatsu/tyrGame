function Sphere(x0, y0, rad0) {
	this.isKilled = false;
	this.x0 = x0;
	this.y0 = y0;
	this.origin_x = x0;
	this.origin_y = y0;
	this.rad = rad0;

	this.front = y0 - rad0;

	this.dx;
	this.dy;
}

Sphere.prototype.restart = function() {
	this.isKilled = false;
	this.origin_x = this.x0;
	this.origin_y = this.y0;
};

Sphere.prototype.init = function() {
	this.dx = new Array(this.nodeNum);
	this.dy = new Array(this.nodeNum);

	var PI2 = 2*Math.PI;
	for(var i=0; i<this.nodeNum; i++) {
		this.dx[i] = this.rad * Math.cos(PI2/i);
		this.dy[i] = this.rad * Math.sin(PI2/i);
	}
};

Sphere.prototype.isNear = function(bicycle) {
	var dist = this.front - bicycle.y;

	if(  -bicycle.bb-bicycle.t-2*this.rad <= dist && dist <= bicycle.bf ) {
		return true;
	}
	else {	
		return false;
	}
};

Sphere.prototype.isInScope = function(bicycle, cvs) {
	var dist = this.origin_y - bicycle.y;
	var bbl = bicycle.bicLine;

	if( -(cvs.height-bbl) < dist && dist < bbl ) {
		return true;
	}
	else {
		return false;
	}
};



/**********************Human Object**************************/
function Human(x0, y0, rad0) {
	this.isKilled = false;
	this.x0 = x0;
	this.y0 = y0;
	this.origin_x = x0;
	this.origin_y = y0;
	this.rad = rad0;

	this.front = y0 - rad0;

	this.nodeNum = 20;

	this.dx;
	this.dy;

	this.init();
};

Human.prototype.__proto__ = Sphere.prototype;

Human.prototype.judgeCollision = function(bicycle) {
	if( this.isNear(bicycle) ) {
		for(var i=0; i<this.nodeNum; i++) {
			var x = this.origin_x + this.dx[i];
			var y = this.origin_y + this.dy[i];
			
			if( bicycle.blade_isCollided(x, y) ) {
				this.isKilled = true;
				PS.point += 100;
				PS.killNum++;
				//PS.sound.playSound(0);
				return;
			}

			if( bicycle.bicycle_isCollided(x, y) ) {
				this.isKilled = true;
				PS.point += 50;
				//PS.sound.playSound(0);
				PS.killNum++;
				return;
			}
		}
	}
};

Human.prototype.drawing = function(bicycle, ctx, cvs) {
	var dist = this.origin_y - bicycle.y;
	var bbl = bicycle.bicLine;

	if( -(cvs.height-bbl)-10*this.rad < dist && dist < bbl ) {
		var img;

		img = PS.img.human_1[0];
			ctx.drawImage(img, this.origin_x-this.rad,
				bbl-dist-this.rad, 2*this.rad, 2*this.rad);

		if(this.isKilled) {
			img_c = PS.img.corpse;
			ctx.drawImage(img_c, this.origin_x-2*this.rad,
				bbl-dist-12*this.rad, 6*this.rad, 15*this.rad);
		}
		else {	
		}
	}
};

Human.prototype.main = function(bicycle, ctx, cvs) {
	if(!this.isKilled) {
		this.judgeCollision(bicycle);	
	}
	this.drawing(bicycle, ctx, cvs);
};



/**********************escape human Object**************************/
function Human_escape(x0, y0, rad0) {
	this.isKilled = false;
	this.x0 = x0;
	this.y0 = y0;

	this.origin_x = x0;
	this.origin_y = y0;
	this.rad = rad0;

	this.front = y0 - rad0;

	this.nodeNum = 20;

	this.dx;
	this.dy;

	this.v0 = PS.Bic.v0*0.2;
	this.v  = PS.Bic.v0*0.2;

	this.init();
};

Human_escape.prototype.__proto__ = Human.prototype;

Human_escape.prototype.escaping = function(bicycle, cvs) {
	var xdist = this.origin_x - bicycle.x;
	if(xdist > 0) {
		this.v = this.v0;
	}
	else {
		this.v = -this.v0;
	}

	this.origin_x += this.v*PS.dt;

	if(this.origin_x < this.rad) {
		this.origin_x = this.rad;
	}
	else if(this.origin_x > cvs.width - this.rad) {
		this.origin_x = cvs.width - this.rad;
	}

};

Human_escape.prototype.drawing = function(bicycle, ctx, cvs) {
	var dist = this.origin_y - bicycle.y;
	var bbl = bicycle.bicLine;

	if( -(cvs.height-bbl)-10*this.rad < dist && dist < bbl ) {
		var img;
		img = PS.img.human_2[0];	
			ctx.drawImage(img, this.origin_x-this.rad,
				bbl-dist-this.rad, 2*this.rad, 2*this.rad);

		if(this.isKilled) {
			img_c = PS.img.corpse;
			ctx.drawImage(img_c, this.origin_x-2*this.rad,
				bbl-dist-12*this.rad, 6*this.rad, 15*this.rad);
		}
		else {	
		}
	}
};

Human_escape.prototype.main = function(bicycle, ctx, cvs) {
	if(!this.isKilled) {
		this.judgeCollision(bicycle);
		if( this.isInScope(bicycle ,cvs) ) {
			this.escaping(bicycle, cvs);
		}
	}

	this.drawing(bicycle, ctx, cvs);
};



/**********************Policeman Object**************************/
function Policeman(x0, y0, rad0) {
	this.isKilled = false;
	this.x0 = x0;
	this.y0 = y0;

	this.origin_x = x0;
	this.origin_y = y0;
	this.rad = rad0;

	this.front = y0 - rad0;

	this.nodeNum = 20;

	this.dx;
	this.dy;

	this.v0 = PS.Bic.v0*0.2;
	this.v  = PS.Bic.v0*0.2;

	this.init();
}

Policeman.prototype.__proto__ = Human.prototype;

Policeman.prototype.tracking = function(bicycle) {
	var xdist = this.origin_x - bicycle.x;
	if(xdist > 0) {
		this.v = -this.v0;
	}
	else {
		this.v =  this.v0;
	}

	this.origin_x += this.v*PS.dt;
};

Policeman.prototype.judgeCollision = function(bicycle) {
	if( this.isNear(bicycle) ) {
		for(var i=0; i<this.nodeNum; i++) {
			var x = this.origin_x + this.dx[i];
			var y = this.origin_y + this.dy[i];

			if( bicycle.blade_isCollided(x, y) ) {
				if(bicycle.isStingMode) {
					this.isKilled = true;
					//PS.sound.playSound(3);
					PS.point += 1000;
					PS.killNum++;
					return;
				}
			}

			if( bicycle.bicycle_isCollided(x, y) ) {
				if(!bicycle.isStingMode) {
					bicycle.isKilled = true;
				}
			}
		}
	}
};

Policeman.prototype.drawing = function(bicycle, ctx, cvs) {
	var dist = this.origin_y - bicycle.y;
	var bbl = bicycle.bicLine;

	if( -(cvs.height-bbl)-10*this.rad < dist && dist < bbl ) {
		var img;

		if(this.isKilled) {
			img = PS.img.corpse;
			ctx.drawImage(img, this.origin_x-7*this.rad,
				bbl-dist-25*this.rad, 15*this.rad, 30*this.rad);
		}
		else {	
			img = PS.img.police[0];	
			ctx.drawImage(img, this.origin_x-this.rad,
				bbl-dist-this.rad, 2*this.rad, 2*this.rad);
		}
	}

};

Policeman.prototype.main = function(bicycle, ctx, cvs) {
	if(!this.isKilled) {
		this.judgeCollision(bicycle);
		if( this.isInScope(bicycle ,cvs) ) {
			this.tracking(bicycle);
		}
	}

	this.drawing(bicycle, ctx, cvs);
};
