import React, { useReducer } from "react";
import BookingPage from "./pages/BookingPage";

// Initial times
export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Reducer function
export const updateTimes = (state, action) => {
  // const selectedDate = action.date;
  // Here could come in later the API logic
  // For now: return same times
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const Main = () => {
  // const [availableTimes, setAvailableTimes] = useState([
  //   "17:00",
  //   "18:00",
  //   "19:00",
  //   "20:00",
  //   "21:00",
  //   "22:00",
  // ]);

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main>
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
};

export default Main;

// import React from "react";
// import Hero from "./Hero";
// import Hightlights from "./Hightlights";
// import Testimonials from "./Testimonials";
// import About from "./About";
// import "./Main.css";

// const Main = () => {
//   return (
//     <>
//       <main>
//         <br />
//         <Hero />
//         <Hightlights />
//         <Testimonials />
//         <About />
//       </main>
//     </>
//   );
// };

// export default Main;
