import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

/* Check: 1. Whether the fields have the correct HTML5 attributes (required, min, max), 2. Whether the fields are rendered correctly, 3. Whether the submit button is present */
describe("BookingForm HTML5 validation", () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  const availableTimes = ["18:00", "19:00"];

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
  });

  test("date input has required and min attributes", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute("min");
  });

  test("time select is required", () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test("guests input has required, min and max attributes", () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("occasion select is required", () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });

  test("submit button is present", () => {
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    expect(submitButton).toBeInTheDocument();
  });

  /*The following tests check: Valid input (e.g., 5 guests) → no error;
  Invalid input (0, >10, text) → error is displayed */
  test("valid guest input does not show error", () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: "5" } });

    const errorMessage = screen.queryByText(/please enter a number/i);
    expect(errorMessage).not.toBeInTheDocument();
  });

  test("invalid guest input shows error for 0 guests", () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: "0" } });

    const errorMessage = screen.getByText(/please enter a number/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("invalid guest input shows error for more than 10 guests", () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: "15" } });

    const errorMessage = screen.getByText(/please enter a number/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("invalid guest input shows error for non-numeric input", () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: "abc" } });

    const errorMessage = screen.getByText(/please enter a number/i);
    expect(errorMessage).toBeInTheDocument();
  });

  /* Check, if the button is disabled when the form is invalid */
  test("submit button is disabled when form is invalid", () => {
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    expect(submitButton).toBeDisabled();
  });

  /* Check activation of the submit button when the form state is valid */
  test("submit button is enabled when form is valid", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    fireEvent.change(dateInput, { target: { value: "2025-10-10" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "3" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    expect(submitButton).not.toBeDisabled();
  });
});
