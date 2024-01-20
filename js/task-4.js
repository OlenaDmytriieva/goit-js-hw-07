const formElement = document.querySelector(".login-form");
formElement.addEventListener("submit", (formEvent) => {
  formEvent.preventDefault();
  const userEmail = formElement.elements.email.value.trim();
  const userPassword = formElement.elements.password.value.trim();
  const userData = {
    userEmail,
    userPassword,
  };
  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
  }
  console.log(userData);
  formElement.reset();
});
