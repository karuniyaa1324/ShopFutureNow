document.getElementById('returnform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    const username = document.getElementById('ordernumber').value;
    const password = document.getElementById('brandname').value;
    const errorMessage = document.getElementById('error-message');

    // Simple client-side validation
    if (ordernumber=== '' || brandname === '') {
        errorMessage.textContent = 'Both fields are required.';
        return;
    }

    // For demo purposes, a hardcoded username and password check
    if (ordernumber == '123456' && brandname == 'Reequil Moisturiser') {
        window.location.href = 'locationtrack.html';
        // You would typically redirect to another page or perform further actions here
       

    } else {
        window.location.href = 'locationtrack.html';
    }
});
