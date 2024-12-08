<?php
include '../../database/db_connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Read input from JSON body
$input = json_decode(file_get_contents("php://input"), true);
$user_id = $input['user_id'];
$barber_id = $input['barber_id'];
$date = $input['date'];
$time = $input['time'];

$sql = "INSERT INTO appointments (user_id, barber_id, date, time) VALUES (:user_id, :barber_id, :date, :time)";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':user_id', $user_id, PDO::PARAM_INT);
$stmt->bindParam(':barber_id', $barber_id, PDO::PARAM_INT);
$stmt->bindParam(':date', $date, PDO::PARAM_STR);
$stmt->bindParam(':time', $time, PDO::PARAM_STR);

if ($stmt->execute()) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>
