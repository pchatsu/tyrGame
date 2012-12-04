window.addEventListener("devicemotion", function(evt){
	PS.Bic.ax = 1000*evt.accelerationIncludingGravity.x;
	PS.Bic.ay = 500*evt.accelerationIncludingGravity.y;
}, true);

function registerMouseEvent() {
	//do nothing
}

function touchEvent(event) {
	if(PS.Bic.isStingMode) {
		PS.Bic.isStingMode = false;
	}
	else {
		PS.Bic.isStingMode = true;
	}
}

window.addEventListener("load", function(){
	document.body.ontouchstart = touchEvent;
	//document.body.ontouchmove  = touchEvent;
	//document.body.ontouchend   = touchEvent;
}, false);
