CREATE DATABASE barber_shop;

USE barber_shop;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(15),
    role ENUM('barber', 'client'),
    password VARCHAR(255)
);

CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    barber_id INT,
    date DATE,
    time TIME,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (barber_id) REFERENCES users(id)
);
