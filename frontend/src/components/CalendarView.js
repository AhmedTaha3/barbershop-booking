import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import "./CalendarView.css";
import { getAppointments } from "../services/api";

const CalendarView = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await getAppointments(1); // Replace with actual barber ID
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <Container className="calendar-view mt-5">
      <h2 className="text-center text-white mb-4">Your Appointments</h2>
      <Table striped bordered hover className="appointments-table">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.name}</td>
              <td>{appointment.phone}</td>
              <td>{appointment.email}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CalendarView;
