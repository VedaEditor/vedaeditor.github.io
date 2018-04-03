var render = document.querySelector(".Renderer");

render.style.background = "rgb(127, 127, 127)";
render.style.height = "100vh";
render.style.width = window.innerWidth + "px";

var veda = new Veda();

veda.GUI.Button("body", {
	click: function() {
		alert(1);
	},
	text: "Hello, World!",
	styles: "position: absolute;"
});
