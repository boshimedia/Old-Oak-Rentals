document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const messageContainer = document.getElementById('message-container');

    // Debugging logs to help understand flow
    console.log("URL Params:", urlParams);
    console.log('Success parameter:', success);

    if (success === 'true') {
        messageContainer.innerHTML = '<div class="success-message">Your message has been sent successfully! We will get back to you within 24 hours.</div>';
    } else if (success === 'false') {
        messageContainer.innerHTML = '<div class="error-message">There was an error sending your message. Please try again, if the issue persists please let us know via our email or contact number.</div>';
    }
});