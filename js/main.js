const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const emailInput = document.querySelector('#email');
const form = document.querySelector('#form');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', validate);

function validate(e) {
  if (!emailRegex.test(emailInput.value)) {
    emailInput.style.border = "1px solid hsl(354, 100%, 66%)";
    errorMessage.style.display = "block";
  } else {
    emailInput.style.border = "1px solid hsl(223, 100%, 88%)";
    errorMessage.style.display = "none";
  }

  e.preventDefault();
}