<?php
include '../../database/db_connection.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$date = $_GET['date'];
$barber_id = $_GET['barber_id'];

$sql = "SELECT time FROM appointments WHERE date = :date AND barber_id = :barber_id";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':date', $date, PDO::PARAM_STR);
$stmt->bindParam(':barber_id', $barber_id, PDO::PARAM_INT);
$stmt->execute();

$booked_slots = $stmt->fetchAll(PDO::FETCH_COLUMN);

$timeSlots = [];
for ($time = strtotime("10:00"); $time < strtotime("22:00"); $time += 1800) {
    if ($time >= strtotime("13:00") && $time < strtotime("14:00")) continue;
    $currentTime = date("H:i", $time);
    $timeSlots[] = [
        'time' => $currentTime,
        'available' => !in_array($currentTime, $booked_slots)
    ];
}

echo json_encode($timeSlots);
?>
