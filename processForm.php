<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $to = 'info@oldoakrentals.com';
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        // Redirect with success message
        header("Location: contactUs.html?success=true");
        exit();
    } else {
        // Redirect with error message
        header("Location: contactUs.html?success=false");
        exit();
    }
} else {
    // Redirect if not a POST request
    header("Location: contactUs.html");
    exit();
}
?>
