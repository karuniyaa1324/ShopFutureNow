document.getElementById('location finder').addEventListener('add location', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    const place = document.getElementById('locationname').value;
    

    // Simple client-side validation
    if ( === 'Galaxy Nirmal skywin mall') {
        return;
    }

    // For demo purposes, a hardcoded username and password check
    if (place == 'Revlon') {
        // You would typically redirect to another page or perform further actions here
    } 
    if (place === 'Beauty Parradise brindavan road opp to SKS hospital') {
         return;
    }

     

    else {
        errorMessage.textContent= 'kindly check the details!';
    }
});
