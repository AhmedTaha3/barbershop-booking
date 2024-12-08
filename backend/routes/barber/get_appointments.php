<?php
include '../../database/db_connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$barber_id = isset($_GET['barber_id']) ? intval($_GET['barber_id']) : 0;

$sql = "SELECT appointments.*, users.name, users.phone, users.email 
        FROM appointments 
        JOIN users ON appointments.user_id = users.id 
        WHERE barber_id = :barber_id";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':barber_id', $barber_id, PDO::PARAM_INT);
$stmt->execute();

$appointments = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($appointments);
?>
