var angle1 = document.getElementById("Angle1");
var angle2 = document.getElementById("Angle2");
var angle3 = document.getElementById("Angle3");
var submit = document.getElementById("submit");
var message = document.getElementById("message");

function isTriangle() {
	if (Number(angle1.value) + Number(angle2.value) + Number(angle3.value) === 180) {
		message.style.color = "green";
		message.innerText = "It is a triangle";
	} else {
		message.style.color = "red";
		message.innerText = 'It is not a triangle. "The three interior angles of a triangle will always have a sum of 180°."';
	}
}

submit.addEventListener("click", isTriangle);
