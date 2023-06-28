<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['phone'])) {
        echo "All fields are required.";
        return;
    }

    $name = trim(htmlspecialchars($_POST['name']));
    $email = trim(htmlspecialchars($_POST['email']));
    $phone = trim(htmlspecialchars($_POST['phone']));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        return;
    }

    if ( mail("bezlikii1235@gmail.com",
        "New message from website",
        "Name: ". $name. "\n".
        "Email: ". $email. "\n".
        "Phone: ". $phone. "\n",
        "From: no-reply@mydomain.com \r\n")
    ){
        echo ("Thank you for your feedback.");
    }
    else{
        echo ("Error");
    }
}

?>
