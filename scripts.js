const submitBtn = document.querySelector('.js-submit-button');
const input = document.querySelector('.js-input');
const message = document.querySelector('.js-message');

function submitForm () {
    if (input.value === '' || !input.value.includes("@")) {
        message.style.color = 'red';
        message.textContent = 'Please enter a valid email address';
        input.style.borderColor = 'red';
    }
    else {
        message.textContent = 'Form submitted successfully';
        message.style.color = 'green';
        input.style.borderColor = 'green';
    }
}

submitBtn.addEventListener('click', submitForm);