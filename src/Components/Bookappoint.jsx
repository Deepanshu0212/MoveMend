import React from 'react'
import "../css/Bookappoint.css";
import { Link } from "react-router-dom";
const Bookappoint = () => {
  return (
    <div className="bookoapp">
      <section className="section8">
        <div>
          <h5>Looking to Book an Appointment?</h5>
        </div>
        <div>
          <p>MoveMend is here to help you Move through life! Booking an appointment online is the most convenient way to
            lock in the location, practitioner &amp; time you want.</p>
        </div>
        <div title="Book Online" to="/" className="btn1">
          <Link to="/book-appointment" className="linko"><span>Book an Appointment</span></Link>
        </div>
      </section>
    </div>
  )
}

export default Bookappoint