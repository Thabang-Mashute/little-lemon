import { initializeTimes, updateTimes } from "../utils/bookingReducer"; // adjust path as needed
/* global fetchAPI */
beforeEach(() => {
  global.fetchAPI = jest.fn();
});

describe("initializeTimes", () => {
  test("initializeTimes returns booking times from fetchAPI", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();
    expect(result).toEqual(mockTimes);
  });
});

describe("updateTimes", () => {
  test("updateTimes returns updated times for selected date", () => {
    const mockTimes = ["18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const newState = updateTimes([], { type: "update", date: "2023-08-01" });
    expect(newState).toEqual(mockTimes);
  });
});
