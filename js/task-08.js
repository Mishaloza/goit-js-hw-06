const loginFormEl = document.querySelector(".login-form");
const submitBtn = document.querySelector(".login-form button[type=submit]");

loginFormEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const emailValue = event.currentTarget.elements.email.value;
  const passwordValue = event.currentTarget.elements.password.value;

  if (emailValue === "" || passwordValue === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const user = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(user);
    event.currentTarget.reset();
  }
}
