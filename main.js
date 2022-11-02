const submit = document.getElementById("submit-btn");
const errorMsg = document.getElementById("error-msg");
const errorIcon = document.getElementById("error-icon");

submit.addEventListener("click", () => {
    errorMsg.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
  });