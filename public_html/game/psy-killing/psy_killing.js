var PS;

/******************************main system class*******************************/
function Psy_killing(fps0) {
	this.cvs;
	this.ctx;

	this.Bic;
	this.stage = new Stage();
	this.stageNum = 1;

	this.fps = fps0;
	this.dt = 1/fps0;

	this.point = 0;
	this.killNum = 0;

	this.img = new Psy_images();
	this.restartCount = 0;

	this.sound;

	this.isPausing = false;
}

Psy_killing.prototype.init = function(canvas_id) {
	this.cvs = document.getElementById(canvas_id);
	this.ctx = this.cvs.getContext("2d");

	this.Bic = new Bicykill(PS.cvs.width/2, 0, 150);
	this.img.loadImage();
	webAudioAPI_start();
};

Psy_killing.prototype.beginInterval = function() {
	setInterval("mainLoop()", 1000*this.dt);
};

Psy_killing.prototype.resetPoint = function() {
	this.point = 0;
	this.killNum = 0;
};

Psy_killing.prototype.changeStage = function(stageNum) {
	delete this.stege;
	this.stage = new Stage();

	this.stage.stageSelect(stageNum);
	this.restart();

	this.stageNum = stageNum;
};

Psy_killing.prototype.restart = function() {
	this.Bic.restart(PS.cvs.width/2, 0);

	for(var i=0; i<this.stage.human_1.length; i++) {
		this.stage.human_1[i].restart();
	}
	for(var i=0; i<this.stage.human_2.length; i++) {
		this.stage.human_2[i].restart();
	}	
	for(var i=0; i<this.stage.human_3.length; i++) {
		this.stage.human_3[i].restart();
	}
	for(var i=0; i<this.stage.police_1.length; i++) {
		this.stage.police_1[i].restart();
	}
	for(var i=0; i<this.stage.obst_s.length; i++) {
		this.stage.obst_s[i].restart();
	}
	for(var i=0; i<this.stage.obst_l.length; i++) {
		this.stage.obst_l[i].restart();
	}
};

Psy_killing.prototype.moveObjects = function() {
	for(var i=0; i<this.stage.human_1.length; i++) {
		this.stage.human_1[i].main(this.Bic, this.ctx, this.cvs);
	}
	for(var i=0; i<this.stage.human_2.length; i++) {
		this.stage.human_2[i].main(this.Bic, this.ctx, this.cvs);
	}	
	for(var i=0; i<this.stage.human_3.length; i++) {
		this.stage.human_3[i].main(this.Bic, this.ctx, this.cvs);
	}
	for(var i=0; i<this.stage.police_1.length; i++) {
		this.stage.police_1[i].main(this.Bic, this.ctx, this.cvs);
	}
	for(var i=0; i<this.stage.obst_s.length; i++) {
		this.stage.obst_s[i].main(this.Bic, this.ctx, this.cvs);
	}
	for(var i=0; i<this.stage.obst_l.length; i++) {
		this.stage.obst_l[i].main(this.Bic, this.ctx, this.cvs);
	}

};

Psy_killing.prototype.drawBackImage = function() {
	var residual = this.Bic.y%this.cvs.height;
	var img = this.img.backimage;

	this.ctx.drawImage(img, 0, residual, this.cvs.width, this.cvs.height);
	this.ctx.drawImage(img, 0, residual-this.cvs.height, this.cvs.width, this.cvs.height);
};

Psy_killing.prototype.drawData = function() {
	this.ctx.fillStyle = "black";
	this.ctx.font = "15pt Arial";
	this.ctx.fillText("STAGE"+this.stageNum, 20, 30);

	this.ctx.font = "12pt Arial";
	this.ctx.fillText("Score: "+this.point, 20, 50);
	this.ctx.fillText("Kill : "+this.killNum, 20, 70);
};

Psy_killing.prototype.loopFunction = function() {
	if(!this.isPausing) {
		if(!this.Bic.isKilled) {
			this.Bic.calcEOM(PS.dt);
			this.ctx.clearRect(0, 0, PS.cvs.width, PS.cvs.height);

			this.drawBackImage();
			this.moveObjects();
			this.Bic.drawing(this.ctx, this.cvs);

			this.drawData();
		}
		this.judgeEnd();
	}
};

Psy_killing.prototype.judgeEnd = function() {
	if(this.Bic.isKilled) {
		if(this.restartCount == 0) {
			//this.sound.playSound(1);
		}
		this.resetPoint();
		this.ctx.drawImage(this.img.topimage, 0, 0, this.cvs.width, this.cvs.height);
		this.restartCount++;
		if(this.restartCount > 50) {
			this.restart();
			this.restartCount = 0;
		}
	}

	if(this.Bic.y > this.stage.goal) {
		this.stageNum++;
		this.changeStage(this.stageNum);
	}
};
/*************************************************************************/


function mainLoop() {
	PS.loopFunction();
}

function loading() {
	PS.ctx.fillStyle = "black";
	PS.ctx.font = "12pt Arial";
	PS.ctx.fillText("Now Loading ...", PS.cvs.width/2-140, PS.cvs.height/2);

}

function main() {
	PS = new Psy_killing(30);
	PS.init("main");

	PS.changeStage(1);

	registerMouseEvent();

	loading();
	PS.img.topimage.onload = function() {
		PS.beginInterval();

	
	}
}

