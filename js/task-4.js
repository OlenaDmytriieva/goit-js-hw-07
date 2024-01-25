const formElement = document.querySelector(".login-form");
formElement.addEventListener("submit", (formEvent) => {
  formEvent.preventDefault();
  const userEmail = formElement.elements.email.value.trim();
  const userPassword = formElement.elements.password.value.trim();

  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
  } else {
    const userData = {
      userEmail,
      userPassword,
    };
    console.log(userData);
    formElement.reset();
  }
});
