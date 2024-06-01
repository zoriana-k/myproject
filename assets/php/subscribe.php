<?php
header('Content-Type: application/json');

$email = $_POST['email'];

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $file = 'subscribers.txt';
    file_put_contents($file, $email . PHP_EOL, FILE_APPEND | LOCK_EX);

    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Невірний формат електронної пошти.']);
}
?>
