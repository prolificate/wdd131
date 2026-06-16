const submitBtn = document.querySelector('#submitBtn');
const successMessage = document.querySelector('#successMessage');
const formCard = document.querySelector('#formCard');

// Input fields
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');

// Error spans
const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const emailError = document.querySelector('#emailError');

submitBtn.addEventListener('click', () => {
    // Clear previous errors
    firstNameError.textContent = '';
    lastNameError.textContent = '';
    emailError.textContent = '';

    let valid = true;

    // Validate fields
    if (firstName.value.trim() === '') {
        firstNameError.textContent = 'Please enter your first name.';
        valid = false;
    }

    if (lastName.value.trim() === '') {
        lastNameError.textContent = 'Please enter your last name.';
        valid = false;
    }

    if (email.value.trim() === '' || !email.value.includes('@')) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
    }

    if (!valid) return; // stop if errors exist

    // Gather selected interests
    const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked');
    const interests = Array.from(checkboxes).map(cb => cb.value);

    // Build the subscriber object
    const subscriber = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        email: email.value.trim(),
        interests: interests,
        date: new Date().toLocaleDateString()
    };

    // Get existing subscribers from localStorage (or empty array)
    const existing = JSON.parse(localStorage.getItem('nigeriaSubscribers') || '[]');

    // Add new subscriber and save back
    existing.push(subscriber);
    localStorage.setItem('nigeriaSubscribers', JSON.stringify(existing));

    window.location.href = 'success.html';
});

const currentPage = window.location.href;
document.querySelectorAll('nav a').forEach(link => {
    if (link.href === currentPage) {
        link.classList.add('active');
    }
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const button = document.querySelector("#menu");
const nav = document.querySelector("nav");

button.addEventListener("click", () => {
    nav.classList.toggle('open');
    button.classList.toggle('open');
});