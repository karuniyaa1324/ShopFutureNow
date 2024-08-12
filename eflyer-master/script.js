document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple client-side validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required.';
        return;
    }

    // For demo purposes, a hardcoded username and password check
    if (username === 'admin' && password === 'password') {
        errorMessage.textContent = 'Login successful!';
        // You would typically redirect to another page or perform further actions here
        window.location.href = 'indexhome.html';

    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});
