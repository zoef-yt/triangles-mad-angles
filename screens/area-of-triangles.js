var base = document.getElementById("base");
var height = document.getElementById("height");
var submit = document.getElementById("submit");
var message = document.getElementById("message");

function calculateAreaOfTriangle() {
	var area = (Number(base.value) * Number(height.value)) / 2;
	console.log(area);
	if (Number(area) > 0) {
		message.style.color = "green";
	} else {
		message.style.color = "red";
	}
	message.innerHTML = "The area of the triangle is " + area;
}
submit.addEventListener("click", calculateAreaOfTriangle);
