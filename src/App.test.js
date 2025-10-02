// import App from "./App.js";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./Main.jsx";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText("Homepage");
//   expect(linkElement).toBeInTheDocument();
// });

const setup = () => {
  const mockTimes = [];
  render(<BookingForm availableTimes={mockTimes} />);
};

test("Renders the BookingForm date, time, number of guests and occasion labels", () => {
  setup();
  const labelElement = screen.getByText("Choose Date:");
  expect(labelElement).toBeInTheDocument();
  expect(screen.getByText("Choose Date:")).toBeInTheDocument();
  expect(screen.getByText("Choose Time:")).toBeInTheDocument();
  expect(screen.getByText("Number of Guests:")).toBeInTheDocument();
  expect(screen.getByText("Occasion:")).toBeInTheDocument();
});

test("Renders the submit button", () => {
  setup();
  const buttonElement = screen.getByRole("button", {
    name: /Make your Reservation/i,
  });
  expect(buttonElement).toBeInTheDocument();
});

test("initializeTimes returns expected default times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

// test("initializeTimes includes expected times", () => {
//   const result = initializeTimes();
//   expect(result).toEqual(
//     expect.arrayContaining(["17:00", "18:00", "19:00", "20:00"])
//   );
//   // expect(result.length).toBeGreaterThanOrEqual(4);
//   // expect(result).toContain("17:00");
// });

test("updateTimes returns the same state it receives", () => {
  const currentState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: "UPDATE", date: "2025-10-02" };
  const result = updateTimes(currentState, action);
  expect(result).toEqual(currentState);
});

// test("updateTimes includes all original times", () => {
//   const currentState = ["17:00", "18:00", "19:00"];
//   const action = { type: "UPDATE", date: "2025-10-02" };
//   const result = updateTimes(currentState, action);
//   expect(result).toEqual(expect.arrayContaining(currentState));
// });

test("BookingForm can be submitted by the user", () => {
  const mockTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();
  // const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const mockSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={mockTimes}
      dispatch={mockDispatch}
      onSubmit={mockSubmit}
    />
  );

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/Choose Date:/i), {
    target: { value: "2025-10-10" },
  });

  fireEvent.change(screen.getByLabelText(/Choose Time:/i), {
    target: { value: "18:00" },
  });

  fireEvent.change(screen.getByLabelText(/Number of Guests:/i), {
    target: { value: "4" },
  });

  fireEvent.change(screen.getByLabelText(/Occasion:/i), {
    target: { value: "Birthday" },
  });

  // Submit the form
  fireEvent.click(
    screen.getByRole("button", { name: /Make your Reservation/i })
  );

  // Assert dispatch was called
  expect(mockDispatch).toHaveBeenCalled();

  // Assert submission
  expect(mockSubmit).toHaveBeenCalled();
});
