function Veda(id, perspective, projectionMode, width, height, color) {
	document.querySelector(id).style.background = color;
	document.querySelector(id).style.height = height + "px";
	document.querySelector(id).style.margin = 0;
	document.querySelector(id).style.overflow = "hidden";
	document.querySelector(id).style.padding = 0;
	document.querySelector(id).style.width = width + "px";
	
	document.querySelector(id).style.webkitPerspective = perspective;
	document.querySelector(id).style.webkitTransformStyle = projectionMode;
}

Veda.prototype = {
	animateGeometry: function(geometry, animLink, duration, type, animCode) {
		document.querySelector("style").innerHTML += "@keyframes " + animLink +
			"{" +
			animCode +
			"}";
		geometry.style.animation = animLink + " " + duration + " " + type;
	},
	antialias: function(geometry) {
		geometry.style.outline = "1px solid Transparent";
	},
	backfaceCulling: function(geometry, value) {
		geometry.style.zIndex = value;
	},
	breakAnimGeometry: function(geometry, end, type, axis, matrix, elem, unit) {
		var start = Date.now();
		
		window.requestAnimationFrame(function animateGeometry(time) {
			var passed = time - start;
			
			if (passed > end) {
				passed = time;
				geometry.style.WebkitTransform = "";
			}
			
			geometry.style.WebkitTransform = type + axis + "(" + matrix[elem]++ + unit + ")";
			
			if (passed < end) {
				window.requestAnimationFrame(animateGeometry);
			}
		});
	},
	createGeometry: function(width, height, color, path) {
		var geometry = document.createElement("span");
		
		geometry.style.background = color;
		geometry.style.display = "block";
		geometry.style.height = height + "px";
		geometry.style.clipPath = "polygon(" + path + ")";
		geometry.style.width = width + "px";
		
		return geometry;
	},
	geometryMaterial: function(geometry, material) {
		geometry.style.background = material;
	},
	render: function(id, geometry) {
		document.querySelector(id).appendChild(geometry);
	},
	rotateCamera: function(id, rx, ry, rz) {
		document.querySelector(id + " *").style.WebkitTransform += "rotateX(" + rx + "deg) rotateY(" + ry + "deg) rotateZ(" + rz + "deg)";
	},
	rotateGeometry: function(geometry, rx, ry, rz) {
		geometry.style.WebkitTransform += "rotateX(" + rx + "deg) rotateY(" + ry + "deg) rotateZ(" + rz + "deg)";
	},
	scaleGeometry: function(geometry, sx, sy, sz) {
		geometry.style.WebkitTransform += "scaleX(" + sx + ") " + "scaleY(" + sy + ") scaleZ(" + sz + ")";
	},
	translateGeometry: function(geometry, tx, ty, tz) {
		geometry.style.WebkitTransform += "translateX(" + tx + "px) translateY(" + ty + "px) translateZ(" + tz + "px)";
	},
	wireframes: function(geometry, bool, color) {
		if (bool == true) {
			geometry.style.border = "1px solid " + color;
		} else {
			geometry.style.border = "none";
		}
	}
};
