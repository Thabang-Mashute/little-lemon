import { isFormValid } from "../utils/validation";
import { render, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";

test("Form is valid when all fields are correct", () => {
  const result = isFormValid("2025-07-20", "18:00", 4, "Birthday");
  expect(result).toBe(true);
});

test("Form is invalid when date is missing", () => {
  const result = isFormValid("", "18:00", 4, "Anniversary");
  expect(result).toBe(false);
});

test("Form is invalid when time is missing", () => {
  const result = isFormValid("2025-07-20", "", 4, "Birthday");
  expect(result).toBe(false);
});

test("Form is invalid when guests < 1", () => {
  const result = isFormValid("2025-07-20", "18:00", 0, "Anniversary");
  expect(result).toBe(false);
});

test("Form is invalid when occasion is missing", () => {
  const result = isFormValid("2025-07-20", "18:00", 4, "");
  expect(result).toBe(false);
});

test("Submit button is disabled when form is invalid", () => {
  render(<BookingForm availableTimes={[]} />);
  const button = screen.getByRole("button", { name: /make your reservation/i });
  expect(button).toBeDisabled();
});
