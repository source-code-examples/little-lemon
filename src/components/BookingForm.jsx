import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  //   const [guestError, setGuestError] = useState("");

  //   const handleGuestsChange = (e) => {
  //     const value = Number(e.target.value);
  //     setGuests(value);

  //     if (value < 1 || value > 10 || isNaN(value)) {
  //       setGuestError("Bitte geben Sie eine Gästeanzahl zwischen 1 und 10 ein.");
  //     } else {
  //       setGuestError("");
  //     }
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (guestError) {
    //   alert("Bitte korrigieren Sie die Fehler im Formular.");
    //   return;
    // }
    console.log("Reservation:", { date, time, guests, occasion });
    // Here you could call e.g. an API
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="booking-date">Choose Date:</label>
      <input
        type="date"
        id="booking-date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="booking-time">Choose Time:</label>
      <select
        name="time"
        id="booking-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of Guests:</label>
      <input
        type="number"
        id="guests"
        name="guests"
        step={1}
        min={1}
        max={10}
        placeholder={1}
        value={guests}
        // onChange={handleGuestsChange}
        onChange={(e) => setGuests(Number(e.target.value))}
      />
      {/* {guestError && (
        <span style={{ color: "red", fontSize: "0.8em" }}>{guestError}</span>
      )} */}

      <label htmlFor="occasion">Occasion:</label>
      <select
        name="occasion"
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make your Reservation" />
    </form>
  );
};

export default BookingForm;
