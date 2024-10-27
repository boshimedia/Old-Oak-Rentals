document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const messageContainer = document.getElementById('message-container');

    if (success === 'true') {
        messageContainer.innerHTML = '<div class="success-message"><h3>Message sent</h3><p>Your message has been sent successfully!</p></div>';
    } else if (success === 'false') {
        messageContainer.innerHTML = '<div class="error-message"><h3>Message error</h3><p>Please try resending your message.</p></div>';
    }
});
