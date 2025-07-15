/* global submitAPI */
import React, { useReducer, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BookingPage from "./Pages/BookingPage";
import ConfirmedBooking from "./Pages/ConfirmedBooking";

import { initializeTimes, updateTimes } from "../src/utils/bookingReducer";

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    if (window.fetchAPI) {
      const times = window.fetchAPI(today);
      dispatch({ type: "initialize", times });
    }
  }, []);
  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData); // or window.submitAPI if loaded globally
    if (isSuccess) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <section className="grid">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm} //
              />
            }
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </section>
    </main>
  );
}

export default Main;
