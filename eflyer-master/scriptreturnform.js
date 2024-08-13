document.getElementById('returnform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    const ordernumber = document.getElementById('ordernumber').value;
    const brandname= document.getElementById('brandname').value;
    const errorMessage = document.getElementById('error-message');

    // Simple client-side validation
    if (ordernumber=== '' || brandname === '') {
        errorMessage.textContent = 'Both fields are required.';
        return;
    }

    // For demo purposes, a hardcoded username and password check
    if (ordernumber == '123456' && brandname == 'reequil moisturiser') {
        window.location.href = 'locationtrack.html';
        // You would typically redirect to another page or perform further actions here
       

    } else {
        errorMessage.textContent= 'kindly check the details!';
    }
});
