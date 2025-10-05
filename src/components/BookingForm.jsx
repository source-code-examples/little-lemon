import React, { useState, useEffect } from "react";
import "./BookingForm.css";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  console.log("availableTimes:", availableTimes);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [guestError, setGuestError] = useState("");
  const [occasion, setOccasion] = useState("Birthday");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (availableTimes.length > 0) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes]);

  /* Check whether all fields are valid */
  useEffect(() => {
    const isValid =
      date && time && guests >= 1 && guests <= 10 && !guestError && occasion;

    setIsFormValid(isValid);
  }, [date, time, guests, guestError, occasion]); //  Function is executed automatically when one of the fields changes

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservation = { date, time, guests, occasion };
    console.log("Reservation:", reservation);

    try {
      await submitForm(reservation); // Gives the data to the main component
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Reserve a Table</h2>
      <label htmlFor="booking-date">Choose Date:</label>
      <input
        type="date" // HTML5 validation
        required // Mandatory field
        min={new Date().toISOString().split("T")[0]} // No date in the past
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
        required
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
        step={1} // Change only by a whole number
        min={1} // At least one guest
        max={10} // Maximum ten guests
        required // Mandatory field
        // placeholder={1}
        value={guests}
        onChange={handleGuestsChange}
        aria-describedby="guest-error"
        aria-invalid={guestError ? "true" : "false"}
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
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        aria-label="Submit reservation"
        type="submit"
        value="Make your Reservation"
        disabled={!isFormValid} // Only active if the form is valid
        style={{
          cursor: isFormValid ? "pointer" : "not-allowed",
          backgroundColor: isFormValid ? "var(--lemon-yellow)" : "",
        }}
      />
    </form>
  );
};

export default BookingForm;
