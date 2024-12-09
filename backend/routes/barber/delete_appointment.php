<?php
include '../../database/db_connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Read input from JSON body
$input = json_decode(file_get_contents("php://input"), true);
$appointment_id = $input['appointment_id'];

$sql = "DELETE FROM appointments WHERE id = :id";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':id', $appointment_id, PDO::PARAM_INT);

if ($stmt->execute()) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>
