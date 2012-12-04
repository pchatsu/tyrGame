var Mouse = { x: null, y: null};


var getMousePosOnElement = function(e) {
	var rect = e.target.getBoundingClientRect();
	Mouse.x = e.clientX - rect.left;
	Mouse.y = PS.cvs.height - (e.clientY - rect.top);
}


function registerMouseEvent() {
	PS.cvs.addEventListener("mousedown", function(e) {
		touchEvent();
	}, false);

	PS.cvs.addEventListener("mousemove", function(e) {
		mouseMove(e);
	}, false);

	PS.cvs.addEventListener("mouseup", function(e) {
	}, false);
};


function mouseMove(e) {
	getMousePosOnElement(e);
	var ratio_x = 0.7;
	var ratio_y = 0.2;
	PS.Bic.vx += ratio_x * (Mouse.x - PS.Bic.x);
	PS.Bic.vy += ratio_y * (Mouse.y - PS.cvs.height/2);
}


function touchEvent() {
	if(PS.Bic.isStingMode) {
		PS.Bic.isStingMode = false;
	}
	else {
		PS.Bic.isStingMode = true;
	}
}


document.onkeydown = Keyboard;
function Keyboard(evt) {

	switch(evt.which) {
		case 66: //b
			PS.Bic.vx += 200;
			break;

		case 86: //v
			PS.Bic.vx -= 200;
			break;

		default: //g
			touchEvent();
			break;
	}
}
