import React from "react";
import BookingForm from "../Components/BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section>
      <h1>Book a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
