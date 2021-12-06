var base = document.getElementById("base");
var height = document.getElementById("height");
var submit = document.getElementById("submit");
var output = document.getElementById("output");

function getHypotenuse() {
	var hypotenuse = Math.sqrt(Number(base.value * base.value) + Number(height.value * height.value));
	output.style.display = "block";
	output.style.color = "black";
	output.style.fontSize = "20px";

	output.innerHTML = "The hypotenuse is " + hypotenuse.toFixed(2) + ".";
}

submit.addEventListener("click", getHypotenuse);
