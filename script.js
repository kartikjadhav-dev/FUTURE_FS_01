// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple Email Regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // If validation fails, stop the submission and show an error
    if (name.length < 2) {
        e.preventDefault(); 
        showStatus("Please enter a valid name.", "red");
    } else if (!emailPattern.test(email)) {
        e.preventDefault();
        showStatus("Please enter a valid email address.", "red");
    } else if (message.length < 10) {
        e.preventDefault();
        showStatus("Message must be at least 10 characters long.", "red");
    } 
    // If validation passes, we DON'T use e.preventDefault(). 
    // The browser will naturally POST to your Formspree URL!
});

function showStatus(text, color) {
    formStatus.textContent = text;
    formStatus.style.color = color;
    formStatus.style.marginTop = "10px";
    formStatus.style.fontWeight = "bold";
}