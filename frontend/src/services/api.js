import axios from 'axios';

const API_URL = "http://localhost/barbershop-booking/backend/routes";

export const getHairStyles = async () => {
  return await axios.get(`${API_URL}/client/get_hair_styles.php`);
};

export const getSlots = async (date, barberId) => {
  return await axios.get(`${API_URL}/client/get_slots.php`, {
    params: { date, barber_id: barberId }, // Ensure parameter naming matches backend
  });
};

export const bookAppointment = async (data) => {
  return await axios.post(`${API_URL}/client/book_appointment.php`, data); // Ensure the `data` object has correct keys
};

export const getAppointments = async (barberId) => {
  return await axios.get(`${API_URL}/barber/get_appointments.php`, {
    params: { barber_id: barberId }, // Ensure parameter naming matches backend
  });
};
