document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#submit').addEventListener('click', function() {
        var selectedValue = document.querySelector('#inputGroupSelect04').value;
        if (selectedValue === 'apod') {
            // Redirect to the apod.html page
            window.location.href = '/apod';
            
        } else if (selectedValue === 'earth') {
            // Redirect to another page for 'neo' (adjust the URL as needed)
            window.location.href = '/earth';

        } else if (selectedValue === 'exoplanets') {
            // Redirect to another page for 'exoplanets' (adjust the URL as needed)
            window.location.href = '/exoplanets';
        }
    });
});