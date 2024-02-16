document.addEventListener('DOMContentLoaded', function() {
    var numberElement = document.getElementById('number'); // Get the element with ID 'number'

    // Set initial number to 6
    numberElement.textContent = '6';

    // Change the number to 9 upon click
    numberElement.addEventListener('click', function() {
        this.textContent = '9';
    });
});
