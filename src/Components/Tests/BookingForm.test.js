import { render, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";

test("renders the 'Choose date' label", () => {
  render(
    <BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} />
  );
  const label = screen.getByText(/Choose date/i);
  expect(label).toBeInTheDocument();
});
test("Date input has required attribute", () => {
  render(<BookingForm availableTimes={[]} />);
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute("required");
});

test("Time select has required attribute", () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} />);
  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect).toHaveAttribute("required");
});

test("Guests input has min and max attributes", () => {
  render(<BookingForm availableTimes={[]} />);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
  expect(guestsInput).toHaveAttribute("required");
});

test("Occasion select has required attribute", () => {
  render(<BookingForm availableTimes={[]} />);
  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toHaveAttribute("required");
});
