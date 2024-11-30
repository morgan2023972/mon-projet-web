// Select the button and the paragraph
const button = document.getElementById('actionButton');
const message = document.getElementById('message');

// Initialize a click counter
let clickCount = 0;

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Increment the counter
    clickCount++;

    // Update the content of the paragraph
    message.textContent = `Bravo ! Vous avez cliqué ${clickCount} fois 🎉`;
});
// Select the reset button
const resetButton = document.getElementById('resetButton');

// Add a click event listener to reset the counter
resetButton.addEventListener('click', () => {
    clickCount = 0;
    message.textContent = 'Compteur réinitialisé. Cliquez pour commencer !';
    message.className = ''; // Remove any dynamic class
});
