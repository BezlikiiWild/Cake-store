const form = document.querySelector('form');

const isEmail = (email) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
};

const isPhoneNumber = (phone) => {
    const regex = /^\d{1,14}$/; // Changed to accept from 1 to 14 digits
    return regex.test(phone);
}

const validateForm = (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    let isValid = true;

    // Remove error class
    [nameInput, emailInput, phoneInput].forEach(input => {
        input.classList.remove('error');
    });

    // Validate name
    if (nameInput.value.trim() === '') {
        isValid = false;
        alert('Name is required.');
        nameInput.classList.add('error');
    }

    // Validate email
    if (emailInput.value.trim() === '') {
        isValid = false;
        alert('Email is required.');
        emailInput.classList.add('error');
    } else if (!isEmail(emailInput.value)) {
        isValid = false;
        alert('Email is not valid.');
        emailInput.classList.add('error');
    }

    // Validate phone
    if (!isPhoneNumber(phoneInput.value)) {
        isValid = false;
        alert('Phone is not valid. Please enter a number with up to 14 digits.');
        phoneInput.classList.add('error');
    }

    if (isValid) {
        form.submit();
    }
};

form.addEventListener('submit', validateForm);

// Limit phone input to 14 digits
document.getElementById('phone').addEventListener('input', function() {
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});
