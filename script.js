// Contact Form Submission
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    // Basic Validation
    if (email) {
        document.getElementById('responseMessage').textContent = 'Thank you! We will respond to ${email} shortly.';
    } else {
        document.getElementById('responseMessage').textContent = 'Please provide a valid email address.';
    }
});