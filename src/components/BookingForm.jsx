import React, { useState, useEffect } from "react";
import "./BookingForm.css";

const BookingForm = ({ availableTimes, dispatch }) => {
  console.log("availableTimes:", availableTimes);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [guestError, setGuestError] = useState("");
  const [occasion, setOccasion] = useState("Birthday");

  useEffect(() => {
    if (availableTimes.length > 0) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes]);

  const handleGuestsChange = (e) => {
    const value = Number(e.target.value);
    setGuests(value);

    if (value < 1 || value > 10 || isNaN(value)) {
      setGuestError("Please enter a number of guests between 1 and 10.");
    } else {
      setGuestError("");
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation:", { date, time, guests, occasion });
    // Here you could call e.g. an API
    // fetch("/api/reservations", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ date, time, guests, occasion }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     alert("Reservation confirmed!");
    //   })
    //   .catch((err) => {
    //     alert("Something went wrong.");
    //   });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="booking-date">Choose Date:</label>
      <input
        type="date"
        id="booking-date"
        name="date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="booking-time">Choose Time:</label>
      <select
        name="time"
        id="booking-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
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
        // placeholder={1}
        value={guests}
        onChange={handleGuestsChange}
      />
      {guestError && (
        <span style={{ color: "red", fontSize: "0.8em" }}>{guestError}</span>
      )}

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
