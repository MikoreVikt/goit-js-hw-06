const registerForm = document.querySelector(`.login-form`);
const formData = {};

registerForm.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    return alert("Заполните все поля!");
  }

  formData.email = event.currentTarget.elements.email.value;
  formData.password = event.currentTarget.elements.password.value;
  event.currentTarget.reset();
  console.log(formData);
}
