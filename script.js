var body = document.getElementById("gradient");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var direction = document.querySelector("#direction")

function setGradient() {
	body.style.background = 
	"linear-gradient(" + direction.value + ", " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function setDirection() {
	body.style.background = 
	"linear-gradient(" + direction.value + ", " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

direction.addEventListener("input", setDirection);
