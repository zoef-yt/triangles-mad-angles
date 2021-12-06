const form = document.querySelector(".quiz-form");
const submit = document.querySelector("#submit");
const message = document.querySelector("#message");
const correct = ["90°", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle"];

function checkAnswer() {
	var score = 0;
	var index = 0;
	const formData = new FormData(form);
	for (let result of formData.values()) {
		if (result === correct[index]) {
			score++;
		}
		index++;
	}
	message.textContent = `You got ${score} out of ${correct.length} correct!`;
}
submit.addEventListener("click", checkAnswer);
