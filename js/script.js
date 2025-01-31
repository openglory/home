// Example JavaScript to show a console message when the page is loaded
window.onload = function() {
    console.log("Welcome to OpenGlory!");
};

// Example of adding functionality to the 'Get Started' button
document.querySelector('.cta-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the link from navigating
    alert("You clicked 'Get Started'! Welcome aboard!");
});
