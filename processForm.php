<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $to = 'info@oldoakrentals.com';
    $subject = "Old Oak Tree | Enquiry from: $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: contactUs.html?success=true");
        exit();
    } else {
        header("Location: contactUs.html?success=false");
        exit();
    }
} else {
    header("Location: contactUs.html");
    exit();
}
?>
