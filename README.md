Application's architecture

/backend
├── /database
│   ├── db_connection.php       # Database connection script
│   ├── database.sql            # SQL file to set up the database
├── /routes
│   ├── /client                 # Routes for client profile
│   │   ├── get_hair_styles.php # Fetch hair styles for the landing page
│   │   ├── get_slots.php       # Fetch available time slots
│   │   ├── book_appointment.php# Book an appointment
│   ├── /barber                 # Routes for barber profile
│       ├── get_appointments.php# Fetch barber's appointments
│       ├── delete_appointment.php # Delete an appointment
/frontend
├── /src
│   ├── /components
│   │   ├── LandingPage.jsx          # Client landing page
│   │   ├── BookingPage.jsx          # Appointment booking page
│   │   ├── CalendarView.jsx         # Barber calendar view
│   ├── /services
│   │   ├── api.js                   # API service to communicate with backend
│   ├── App.jsx                      # Main React component
│   ├── index.js                     # React entry point
├── /public
│   ├── index.html                   # Main HTML file
├── package.json                     # React project dependencies

