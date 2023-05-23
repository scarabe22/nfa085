
<?= $_POST['first-name'] ?? '' ?>
<?= $_POST['last-name'] ?? '' ?>
<?= $_POST['email'] ?? '' ?>
<?= $_POST['phone'] ?? '' ?>
<?= $_POST['password'] ?? '' ?>
<?= $_POST['gender'] ?? '' ?>
<?= $_POST['reason'] ?? '' ?>

<?php
$firstName = $_POST['first-name'] ?? '';
$lastName = $_POST['last-name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$password = $_POST['password'] ?? '';
$gender = $_POST['gender'] ?? '';
$reason = $_POST['reason'] ?? '';



echo $firstName . ' ' . $lastName . '<br>';
echo 'Email: ' . $email . '<br>';
echo 'Téléphone: ' . $phone . '<br>';
echo 'Mot de passe: ' . $password . '<br>';
echo 'Genre: ' . $gender . '<br>';
echo 'Raison: ' . $reason;
?>