/* global fetchAPI */
export const initializeTimes = () => {
  const today = new Date();
  return window.fetchAPI(today); // Uses the API to get today's available times
};

export const updateTimes = (state, action) => {
  return window.fetchAPI(new Date(action.date));
};
