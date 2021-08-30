const sign_in_btn = document.querySelector("#sign-in-btn");
const password = document.querySelector("#password");
const container = document.querySelector(".container");

password.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
