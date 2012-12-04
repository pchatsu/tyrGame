
function Psy_sounds() {
	this.ctx = new webkitAudioContext();
	this.bufferLoader;

	this.bgm;
	this.bgmNum = 4;
};

Psy_sounds.prototype.loadSound = function() {
	this.bufferLoader = new BufferLoader(this.ctx ,
			[
			"./sound/se/bass.mp3" ,
			"./sound/se/snare.mp3" ,
			"./sound/se/sui.mp3" ,
			"./sound/se/tum_high.mp3" ,	
			"./sound/se/hihat_open.mp3"
			] ,
			function(){console.log("finish load.");});
	this.bufferLoader.load();

};

Psy_sounds.prototype.playSound = function(bufNum) {
	var source;
	source = this.ctx.createBufferSource();
	source.buffer = this.bufferLoader.bufferList[bufNum];
	source.loop = false;
	source.connect(this.ctx.destination);
	source.noteOn(this.ctx.currentTime);
};

Psy_sounds.prototype.playSoundWithTime = function(bufNum,late) {
	var source;
	source = this.ctx.createBufferSource();
	source.buffer = this.bufferLoader.bufferList[bufNum];
	source.loop = false;
	source.connect(wap.destination);
	source.noteOn(wap.currentTime + late);

};

Psy_sounds.prototype.stopBGM = function(source) {
	source.noteOff(0);
};

Psy_sounds.prototype.playBGM = function() {
	//var source;
	//source = this.ctx.createBufferSource();
	//source.buffer = this.bufferLoader.bufferList[4];
	//source.loop = true;
	//source.connect(this.ctx.destination);
	//source.noteOn(this.ctx.currentTime);
};

function webAudioAPI_start() {
	PS.sound = new Psy_sounds();
	PS.sound.loadSound();
}
