import React, { useReducer } from "react";
import BookingPage from "./pages/BookingPage";
import { fetchAPI } from "./api";

// Initializes the time values ​​for today's date using the global API.
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today); // Fetches all available times
};

// Reducer function to update the times when a date is selected
export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    const selectedDate = new Date(action.date);
    return fetchAPI(selectedDate); // API call with date
  }
  return state;
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      {/* <h1>Reserve a Table</h1> */}
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
};

export default Main;
