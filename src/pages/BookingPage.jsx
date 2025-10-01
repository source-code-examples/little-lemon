import React from "react";
import BookingForm from "./../components/BookingForm.jsx";
// import Hero from "../components/Hero.jsx";

const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <>
      <main>
        {/* <Hero /> */}
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </main>
    </>
  );
};

export default BookingPage;
