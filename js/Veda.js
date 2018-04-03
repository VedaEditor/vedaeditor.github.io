function Veda() {}

Veda.prototype = {
	addWall: function(parent, wall) {
		document.querySelector(parent).appendChild(wall);
	},
	initWall: function() {
		var wall = document.createElement("div");
		
		wall.className = "Wall";
		
		wall.style.left = (window.innerWidth / 4 - wall.style.width / 2) + "px";
		wall.style.position = "absolute";
		wall.style.top = (window.innerHeight / 4 - wall.style.height / 2) + "px";
		
		return wall;
	},
	rotateWall: function(wall, rx, ry, rz) {
		wall.style.WebkitTransform += "rotateX(" + rx + "deg) rotateY(" + ry + "deg) rotateZ(" + rz + "deg)";
	},
	translateWall: function(wall, tx, ty, tz) {
		wall.style.WebkitTransform += "translateX(" + tx + "px) translateY(" + -ty + "px) translateZ(" + -tz + "px)";
	},
	setMaterial: function(wall, url) {
		wall.style.background = "url(" + url + ")";
	},
	setSize: function(wall, width, height) {
		wall.style.height = height + "px";
		wall.style.width = width + "px";
	}
};

Veda.prototype.GUI = {
	Button: function(parent, options) {
		var button = document.createElement("button");
		
		button.innerText = options.text;
		
		button.onclick = options.click;
		
		button.style.cssText;
		
		document.querySelector(parent).appendChild(button);
	}
};
