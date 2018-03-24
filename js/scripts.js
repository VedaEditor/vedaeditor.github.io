var veda = new Veda(".Renderer", 256, "preserve-3d", window.innerWidth, window.innerHeight + 16, "rgba(127, 127, 127, 1)");

function createPlain() {
	var plain = veda.createGeometry(50, 50, "White", "");
	veda.translateGeometry(plain, window.innerWidth / 2 - 25, window.innerHeight / 2 - 25, 0);
	veda.render(".Renderer", plain);
	plain.onclick = function() {
		var dialog = document.createElement("div");
		
		dialog.innerHTML = "<span style=\"display: inline-block; padding: 8px;\">Настройки модели</span>";
		
		dialog.style.background = "LightGray";
		dialog.style.height = "240px";
		dialog.style.left = window.innerWidth / 2 - 320 / 2 + "px";
		dialog.style.position = "absolute";
		dialog.style.top = window.innerHeight / 2 - 240 / 2 + "px";
		dialog.style.width = "320px";
		
		document.body.appendChild(dialog);
		
		var button = document.createElement("button");
		
		button.innerHTML = "&times;";
		
		button.style.background = "Red";
		button.style.border = "none";
		button.style.padding = "8px";
		button.style.position = "absolute",
		button.style.right = "0px";
		
		button.onclick = function() {
			document.body.removeChild(dialog);
		};
		
		dialog.appendChild(button);
		dialog.appendChild(document.createElement("hr"));
		
		var x = document.createElement("input");
		x.onkeypress = function(e) {
			if (e.keyCode == 13) {
				veda.translateGeometry(plain, this.value, 0, 0);
			}
		};
		x.setAttribute("placeholder", "// Сместить по оси X на…");
		dialog.appendChild(x);
		
		var y = document.createElement("input");
		y.onkeypress = function(e) {
			if (e.keyCode == 13) {
				veda.translateGeometry(plain, 0, this.value, 0);
			}
		};
		y.setAttribute("placeholder", "// Сместить по оси Y на…");
		dialog.appendChild(y);
		
		var z = document.createElement("input");
		z.onkeypress = function(e) {
			if (e.keyCode == 13) {
				veda.translateGeometry(plain, 0, 0, this.value);
			}
		};
		z.setAttribute("placeholder", "// Сместить по оси Z на…");
		dialog.appendChild(z);
		
		var rx = document.createElement("input");
		rx.onkeypress = function(e) {
			if (e.keyCode == 13) {
				veda.rotateGeometry(plain, this.value, 0, 0);
			}
		};
		rx.setAttribute("placeholder", "// Повернуть по оси X на…");
		dialog.appendChild(rx);
		
		var ry = document.createElement("input");
		ry.onkeypress = function(e) {
			if (e.keyCode == 13) {
				veda.rotateGeometry(plain, 0, this.value, 0);
			}
		};
		ry.setAttribute("placeholder", "// Повернуть по оси Y на…");
		dialog.appendChild(ry);
		
		var rz = document.createElement("input");
		rz.onkeypress = function(e) {
			if (e.keyCode == 13) {
				veda.rotateGeometry(plain, 0, 0, this.value);
			}
		};
		rz.setAttribute("placeholder", "// Повернуть по оси Z на…");
		
		dialog.appendChild(rz);
		
		var color = document.createElement("input");
		
		color.onchange = function(e) {
			veda.geometryMaterial(plain, e.target.value);
		};
		
		color.setAttribute("type", "color");
		
		dialog.appendChild(document.createElement("hr"));
		dialog.appendChild(color);
		
		var url = document.createElement("input");
		url.onkeypress = function(e) {
			if (e.keyCode == 13) {
				veda.geometryMaterial(plain, e.target.value);
			}
		};
		url.setAttribute("placeholder", "// Ссылка на изображение");
		
		dialog.appendChild(url);
		dialog.appendChild(document.createElement("hr"));
		
		var apply = document.createElement("button");
		
		apply.innerHTML = "Применить";
		apply.onclick = function() {
			veda.translateGeometry(plain, x.value, y.value, z.value);
			veda.rotateGeometry(plain, rx.value, ry.value, rz.value);
			veda.geometryMaterial(plain, color.value);
		};
		
		dialog.appendChild(apply);
	};
}

function createTriangle() {
	var plain = veda.createGeometry(50, 50, "White", document.querySelector("#TriangleMask").innerHTML);
	veda.translateGeometry(plain, window.innerWidth / 2 - 25, window.innerHeight / 2 - 25, 0);
	veda.render(".Renderer", plain);
	plain.onclick = function() {
		var dialog = document.createElement("div");
		
		dialog.innerHTML = "<span style=\"display: inline-block; padding: 8px;\">Настройки модели</span>";
		
		dialog.style.background = "LightGray";
		dialog.style.height = "240px";
		dialog.style.left = window.innerWidth / 2 - 320 / 2 + "px";
		dialog.style.position = "absolute";
		dialog.style.top = window.innerHeight / 2 - 240 / 2 + "px";
		dialog.style.width = "320px";
		
		document.body.appendChild(dialog);
		
		var button = document.createElement("button");
		
		button.innerHTML = "&times;";
		
		button.style.background = "Red";
		button.style.border = "none";
		button.style.padding = "8px";
		button.style.position = "absolute",
		button.style.right = "0px";
		
		button.onclick = function() {
			document.body.removeChild(dialog);
		};
		
		dialog.appendChild(button);
		dialog.appendChild(document.createElement("hr"));
		
		var x = document.createElement("input");
		x.onkeypress = function(e) {
			if (e.keyCode == 13) {
				veda.translateGeometry(plain, this.value, 0, 0);
			}
		};
		x.setAttribute("placeholder", "// Сместить по оси X на…");
		dialog.appendChild(x);
		
		var y = document.createElement("input");
		y.onkeypress = function(e) {
			if (e.keyCode == 13) {
				veda.translateGeometry(plain, 0, this.value, 0);
			}
		};
		y.setAttribute("placeholder", "// Сместить по оси Y на…");
		dialog.appendChild(y);
		
		var z = document.createElement("input");
		z.onkeypress = function(e) {
			if (e.keyCode == 13) {
				veda.translateGeometry(plain, 0, 0, this.value);
			}
		};
		z.setAttribute("placeholder", "// Сместить по оси Z на…");
		dialog.appendChild(z);
		
		var rx = document.createElement("input");
		rx.onkeypress = function(e) {
			if (e.keyCode == 13) {
				veda.rotateGeometry(plain, this.value, 0, 0);
			}
		};
		rx.setAttribute("placeholder", "// Повернуть по оси X на…");
		dialog.appendChild(rx);
		
		var ry = document.createElement("input");
		ry.onkeypress = function(e) {
			if (e.keyCode == 13) {
				veda.rotateGeometry(plain, 0, this.value, 0);
			}
		};
		ry.setAttribute("placeholder", "// Повернуть по оси Y на…");
		dialog.appendChild(ry);
		
		var rz = document.createElement("input");
		rz.onkeypress = function(e) {
			if (e.keyCode == 13) {
				veda.rotateGeometry(plain, 0, 0, this.value);
			}
		};
		rz.setAttribute("placeholder", "// Повернуть по оси Z на…");
		
		dialog.appendChild(rz);
		
		var color = document.createElement("input");
		
		color.onchange = function(e) {
			veda.geometryMaterial(plain, e.target.value);
		};
		
		color.setAttribute("type", "color");
		
		dialog.appendChild(document.createElement("hr"));
		dialog.appendChild(color);
		
		var url = document.createElement("input");
		url.onkeypress = function(e) {
			if (e.keyCode == 13) {
				veda.geometryMaterial(plain, e.target.value);
			}
		};
		url.setAttribute("placeholder", "// Ссылка на изображение");
		
		dialog.appendChild(url);
		dialog.appendChild(document.createElement("hr"));
		
		var apply = document.createElement("button");
		
		apply.innerHTML = "Применить";
		apply.onclick = function() {
			veda.translateGeometry(plain, x.value, y.value, z.value);
			veda.rotateGeometry(plain, rx.value, ry.value, rz.value);
			veda.geometryMaterial(plain, color.value);
		};
		
		dialog.appendChild(apply);
	};
}
