function submitQuiz() {
  let score = 0;

  if (document.querySelector("input[name = 'q1']:checked ").value === "b") {
    score++;
  }
  if (document.querySelector("input[name = 'q2']:checked ").value === "a") {
    score++;
  }
  if (document.querySelector("input[name = 'q3']:checked ").value === "b") {
    score++;
  }
  if (document.querySelector("input[name = 'q4']:checked ").value === "b") {
    score++;
  }

  let resultDiv = document.querySelector("#res_print")
  resultDiv.innerHTML = score
}
