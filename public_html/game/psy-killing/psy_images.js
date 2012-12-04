function Psy_images() {
	this.topimage = new Image();
	this.backimage = new Image();

	//bicykill's images
	this.kitigai = new Array(2);
	this.kitigai[0] = new Image();
	this.kitigai[1] = new Image();
	this.bladeR  = new Image();
	this.bladeL  = new Image();
	this.bladeS  = new Image();

	//human object's images
	this.human_1 = new Array(2);
	this.human_1[0] = new Image();
	this.human_1[1] = new Image();
	this.human_2 = new Array(2);
	this.human_2[0] = new Image();
	this.human_2[1] = new Image();
	this.human_3 = new Array(2);
	this.human_3[0] = new Image();
	this.human_3[1] = new Image();

	//policeman object's images
	this.police = new Array(2);
	this.police[0] = new Image();
	this.police[1] = new Image();
	this.corpse = new Image();

	//obstacle's images
	this.obstacle_1 = new Image();
}

Psy_images.prototype.loadImage = function() {
	this.topimage.src = "./img/psy-killing.png";

	this.backimage.src = "./img/tile.png";

	this.kitigai[0].src = "./img/kichigai1.png";
	this.kitigai[1].src = "./img/kichigai2.png";
	this.bladeR.src = "./img/migi2.png";
	this.bladeL.src = "./img/hidari2.png";
	this.bladeS.src = "./img/sting2.png";

	this.human_1[0].src = "./img/victim-a1.png";
	this.human_1[1].src = "./img/victim-a2.png";
	this.human_2[0].src = "./img/victim-b1.png";
	this.human_2[1].src = "./img/victim-b2.png";
	this.human_3[0].src = "./img/victim-c1.png";
	this.human_3[1].src = "./img/victim-c2.png";

	this.police[0].src = "./img/police1.png";
	this.police[1].src = "./img/police2.png";
	this.corpse.src = "./img/blood.png";

	this.obstacle_1.src = "./img/obstakill.png";
};
