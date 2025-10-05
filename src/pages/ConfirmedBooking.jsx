import React from "react";
import { useLocation } from "react-router-dom";
import "./ConfirmedBooking.css";

const ConfirmedBooking = () => {
  const location = useLocation();
  const reservation = location.state;

  if (!reservation) {
    return (
      <div className="confirmation-page">
        <h2>Reservation confirmed!</h2>
        <p>No reservation details found.</p>
      </div>
    );
  }

  const { date, time, guests, occasion } = reservation;

  return (
    <>
      <div className="confirmation-page">
        <h2>🎉 Reservation confirmed!</h2>
        <p>Thank you for your reservation at Little Lemon.</p>
        <ul>
          <li>
            <strong>Date:</strong> {date}
          </li>
          <li>
            <strong>Time:</strong> {time}
          </li>
          <li>
            <strong>Guests:</strong> {guests}
          </li>
          <li>
            <strong>Occasion:</strong> {occasion}
          </li>
        </ul>
        <p> We look forward to your visit!</p>
      </div>
    </>
  );
};

export default ConfirmedBooking;
