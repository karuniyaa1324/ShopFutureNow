document.getElementById('location finder').addEventListener('add location', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    const place = document.getElementById('locationname').value;
    

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
