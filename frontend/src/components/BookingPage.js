import React, { useEffect, useState } from "react";
import { Container, Button, Spinner } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./BookingPage.css";
import { getSlots, bookAppointment } from "../services/api";

const BookingPage = () => {
  const [date, setDate] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSlots = async () => {
      setLoading(true);
      try {
        const response = await getSlots(date.toISOString().split("T")[0], 1); // Replace with actual barber ID
        setSlots(response.data);
      } catch (error) {
        console.error("Error fetching slots:", error);
      }
      setLoading(false);
    };

    fetchSlots();
  }, [date]);

  const handleBooking = async (slot) => {
    try {
      const response = await bookAppointment({
        user_id: 1, // Replace with actual user ID from session or state
        barber_id: 1,
        date: date.toISOString().split("T")[0],
        time: slot.time,
      });

      if (response.data.status === "success") {
        alert("Appointment booked successfully!");
        // Optionally refresh slots or appointments
      } else {
        alert("Failed to book appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  return (
    <Container className="booking-page mt-5">
      <h2 className="text-center text-white mb-4">Book an Appointment</h2>
      <div className="calendar-container mx-auto">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="mt-4">
        <h4 className="text-center text-white">Available Slots</h4>
        {loading ? (
          <div className="text-center mt-3">
            <Spinner animation="border" variant="light" />
          </div>
        ) : (
          <div className="d-flex flex-wrap justify-content-center mt-3">
            {slots.map((slot) => (
              <Button
                key={slot.time}
                variant={slot.available ? "primary" : "secondary"} // Blue for available, gray for unavailable
                className={`m-2 slot-button ${
                  !slot.available ? "disabled-slot" : ""
                }`}
                onClick={() => slot.available && handleBooking(slot)}
                disabled={!slot.available} // Disable button if not available
              >
                {slot.time}
              </Button>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default BookingPage;
