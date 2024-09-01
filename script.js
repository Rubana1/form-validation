document.addEventListener("DOMContentLoaded", function() {
    const daySelect = document.getElementById("birthDay");
    const monthSelect = document.getElementById("birthMonth");
    const yearSelect = document.getElementById("birthYear");

    // Populate days (1-31)
    for (let day = 1; day <= 31; day++) {
        const option = document.createElement("option");
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
    }

    // Populate months (1-12)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    months.forEach((month, index) => {
        const option = document.createElement("option");
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
    });

    // Populate years (1980-2024)
    for (let year = 1980; year <= 2024; year++) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let emailPhone = document.querySelector('input[type="text"]').value;
    let password = document.querySelector('input[type="password"]').value;

    // Regular expressions for validation
    let emailPhoneRegex = /^[\w\.-]+@[\w\.-]+\.[a-zA-Z]{2,}$|^\d{10}$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    // Validate email/phone
    if (!emailPhoneRegex.test(emailPhone)) {
        alert('Please enter a valid email address or phone number.');
        return;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        alert('Password must be 6 to 20 characters long, containing at least one numeric digit, one uppercase and one lowercase letter.');
        return;
    }

    // If validation passes, submit the form
    alert('Form submitted successfully!');
    this.submit();
});

function showSignUpForm() {
    document.getElementById('signupForm').style.display = 'block';
    document.querySelector('.loginpage').style.display = 'none';
}

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value.trim();
    var surname = document.getElementById('surname').value.trim();
    var emailOrPhone = document.getElementById('emailOrPhone').value.trim();
    var newPassword = document.getElementById('newPassword').value.trim();
    var birthDay = document.getElementById('birthDay').value;
    var birthMonth = document.getElementById('birthMonth').value;
    var birthYear = document.getElementById('birthYear').value;
    var gender = document.getElementById('gender').value;

    if (!firstName || !surname || !emailOrPhone || !newPassword || !birthDay || !birthMonth || !birthYear || !gender) {
        alert('Please fill in all fields.');
        return;
    }

    if (newPassword.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    if (!validateEmailOrPhone(emailOrPhone)) {
        alert('Please enter a valid email or phone number.');
        return;
    }

    alert('Sign Up successful!');
});

function validateEmailOrPhone(input) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^[0-9]{10,15}$/;
    return emailPattern.test(input) || phonePattern.test(input);
}
