<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $age = htmlspecialchars($_POST['age']);
    $phone = htmlspecialchars($_POST['phone']);
    $telegram = htmlspecialchars($_POST['telegram']);
    $first_name = htmlspecialchars($_POST['first_name']);
    $middle_name = htmlspecialchars($_POST['middle_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    $military = htmlspecialchars($_POST['military']);

    $to = "mainrdix@gmail.com"; // Укажите ваш email
    $subject = "Новая заявка с формы";
    $message = "
    <html>
    <head>
        <title>Новая заявка</title>
    </head>
    <body>
        <p><strong>Вік:</strong> $age</p>
        <p><strong>Телефон:</strong> $phone</p>
        <p><strong>Telegram:</strong> $telegram</p>
        <p><strong>Ім'я:</strong> $first_name</p>
        <p><strong>По батькові:</strong> $middle_name</p>
        <p><strong>Прізвище:</strong> $last_name</p>
        <p><strong>Діючий військовослужбовець:</strong> $military</p>
    </body>
    </html>";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: webmaster@example.com" . "\r\n"; // Замените на вашу почту

    if (mail($to, $subject, $message, $headers)) {
        echo "Форма успешно отправлена.";
    } else {
        echo "Ошибка отправки формы.";
    }
} else {
    echo "Метод не поддерживается.";
}
