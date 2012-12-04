//now available
//Human :static victim
//Human_escape :escaping victim
//Policeman :
//Obstacle_sphere : fuckin' tree
//Obstacle_line :



function Stage() {
	this.human_1 = new Array();
	this.human_2 = new Array();
	this.human_3 = new Array();
	
	this.police_1 = new Array();

	this.obst_s = new Array();
	this.obst_l = new Array();
	
	this.goal;
};

Stage.prototype.init = function() {

	this.human_1.length = 0;
	this.human_2.length = 0;
	this.human_3.length = 0;

	this.police_1.length = 0;
             
	this.obst_s.length = 0;
	this.obst_l.length = 0;
};

Stage.prototype.stageSelect = function(stageNum) {
	//this.init();
	
	switch (stageNum) {
		case 1: this.stage1(); break;
		case 2: this.stage2(); break;
		case 3: this.stage3(); break;
		case 4: this.stage4(); break;
		case 5: this.stage5(); break;
		case 6: this.stage6(); break;
		default: this.stage6(); break;
	}
};

Stage.prototype.stage1 = function() {
	
	for(var i=0; i<120; i++) {
		var rx = Math.random() * PS.cvs.width;
		this.human_1[i] = new Human(rx, 90*i+500, 10);
	}
	for(var i=0; i<200; i++) {
		var rx = Math.random() * PS.cvs.width;
		this.human_2[i] = new Human_escape(rx, 50*i+525, 10);
	}
	for(var i=0; i<5; i++) {
		var rx = Math.random() * PS.cvs.width;
		this.police_1[i] = new Policeman(rx, 1500*i+2750, 10);
	}


	this.goal = 11500;
};

Stage.prototype.stage2 = function() {
	
	for(var i=0; i<200; i++) {
		var rx = Math.random() * PS.cvs.width;
		this.human_2[i] = new Human_escape(rx, 50*i+500, 10);
	}
	for(var i=0; i<20; i++) {
		var rx = Math.random() * PS.cvs.width;
		this.police_1[i] = new Policeman(rx, 500*i+750, 10);
	}
	for(var i=0; i<10; i++) {
		var ry = Math.random() * PS.cvs.width;
		var rr = Math.random() * 5 + 10;
		this.obst_s[i] = new Obstacle_sphere(ry, 1022*i+830, rr);
	}	


	this.goal = 11500;
};

Stage.prototype.stage3 = function() {
	
	for(var i=0; i<200; i++) {
		var rx = Math.random() * PS.cvs.width;
		this.human_2[i] = new Human_escape(rx, 50*i+500, 10);
	}
	for(var i=0; i<20; i++) {
		var rx = Math.random() * PS.cvs.width;
		this.police_1[i] = new Policeman(rx, 500*i+760, 10);
	}
	for(var i=0; i<30; i++) {
		var ry = Math.random() * PS.cvs.width;
		var rr = Math.random() * 5 + 10;
		this.obst_s[i] = new Obstacle_sphere(ry, 400*i+830, rr);
	}	
	for(var i=0; i<10; i++) {
		var ry = Math.random() * PS.cvs.width;
		var rrad = Math.random() * Math.PI/4;
		this.obst_l[i] = new Obstacle_line(ry, 1178*i+1050, 50, rrad);
	}

	this.goal = 12500;
};

Stage.prototype.stage4 = function() {
	
	for(var i=0; i<400; i++) {
		var rx = Math.random() * PS.cvs.width;
		this.human_2[i] = new Human_escape(rx, 25*i+500, 10);
	}
	for(var i=0; i<20; i++) {
		var rx = Math.random() * PS.cvs.width;
		this.police_1[i] = new Policeman(rx, 500*i+760, 20);
	}
	for(var i=0; i<40; i++) {
		var ry = Math.random() * PS.cvs.width;
		var rr = Math.random() * 15 + 6;
		this.obst_s[i] = new Obstacle_sphere(ry, 239*i+832, rr);
	}	
	for(var i=0; i<15; i++) {
		var ry = Math.random() * PS.cvs.width;
		var rrad = Math.random() * Math.PI/2;
		this.obst_l[i] = new Obstacle_line(ry, 855*i+850, 80, rrad);
	}

	this.goal = 13000;
};


Stage.prototype.stage5 = function() {
	
	for(var i=0; i<140; i++) {
		var rx = Math.random() * PS.cvs.width;
		this.police_1[i] = new Policeman(rx, 85*i+500, 10);
	}
	for(var i=0; i<40; i++) {
		var ry = Math.random() * PS.cvs.width;
		var rr = 20;
		this.obst_s[i] = new Obstacle_sphere(ry, 333*i+832, rr);
	}	

	this.goal = 13000;
};


Stage.prototype.stage6 = function() {

	for(var i=0; i<400; i++) {
		var rx = Math.random() * PS.cvs.width;
		this.human_2[i] = new Human_escape(rx, 25*i+500, 10);
	}
	for(var i=0; i<20; i++) {
		var rx = Math.random() * PS.cvs.width;
		this.police_1[i] = new Policeman(rx, 500*i+760, 20);
	}
	for(var i=0; i<20; i++) {
		var ry = Math.random() * PS.cvs.width;
		var rr = Math.random() * 18 + 3;
		this.obst_s[i] = new Obstacle_sphere(ry, 777*i+832, rr);
	}	

	for(var i=0; i<40; i++) {
		var ry = Math.random() * PS.cvs.width;
		var rrad = Math.random() * Math.PI/4;
		this.obst_l[i] = new Obstacle_line(ry, 400*i+850, 120, rrad);
	}
	
	this.goal = 15000;
};
