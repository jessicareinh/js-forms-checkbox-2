console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
const formData = new FormData(event.target);
const data = Object.fromEntries(formData);

console.log(data);

if (!tosCheckbox.checked) {
  showTosError();
  successMessage.setAttribute("hidden", "");
  return;
} else {
  hideTosError();
  successMessage.removeAttribute("hidden");

  alert("Firm submitted");
});

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert

  alert("Form submitted");
});

tosCheckbox.addEventListener("change"; () => {
  if (tosCheckbox.checked) {
    hideTosError();
} else {
  showTosError();
}
});