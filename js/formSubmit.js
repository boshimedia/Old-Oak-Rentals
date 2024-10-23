document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const messageContainer = document.getElementById('message-container');

    if (success === 'true') {
        messageContainer.innerHTML = '<div class="success-message">Your message has been sent successfully! We will get back to you within 24 hours.</div>';
    } else if (success === 'false') {
        messageContainer.innerHTML = '<div class="error-message">There was an error sending your message. Please try again.</div>';
    }
});
