import React from "react";
import BookingForm from "./../components/BookingForm.jsx";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../api.js";
// import Hero from "../components/Hero.jsx";

const BookingPage = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();

  // Central submitForm function
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmation", { state: formData }); // Redirect to the confirmation page; submit data
    } else {
      alert("Reservation failed. Please try another time.");
    }
  };

  return (
    <>
      <main>
        {/* <Hero /> */}
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </main>
    </>
  );
};

export default BookingPage;
