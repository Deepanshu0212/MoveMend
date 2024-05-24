import React from 'react'
import "../css/Needform.css";
const Needform = () => {
  return (
    <div class="needformo">
      <h4>Need Help with making an Appointment?</h4>
      <p>The Client Experience Team is here to assist you. If you are having trouble booking online or would prefer a
        different method, please reach out to us on any of the contact methods below:</p>
      <div class="call">
        <p><i class="fa-solid fa-mobile"></i>&nbsp; &nbsp;&nbsp;&nbsp;0019&nbsp;902&nbsp;543</p>
      </div>
      <div class="email">
        <p><i class="fa-solid fa-envelope"></i>&nbsp; &nbsp;&nbsp;&nbsp;admin@movemend.com</p>
      </div>
      <div class="inp1">
        <div className="namee">
          <h5>Name</h5>
          <input type="text" class="inp" /><br />
          <p class="reqd">This is the required field</p>
        </div>
        <div className="phone">
          <h5>Phone</h5>
          <input type="text" class="inp" /><br />
          <p class="reqd">This is the required field</p>
        </div>
      </div>
      <div class="emai">
        <h5>Email</h5>
        <input type="text" class="inp" required /><br />
        <p class="reqd">This is the required field</p>
      </div>
      <div class="mess">
        <h5>Message</h5>
        <textarea class="inp" /><br />
        <p class="reqd">This is the required field</p>
      </div>
      <div class="submit">
        <button class="bsub">SUBMIT</button><br />
        <p class="psub">Please Enter Correct Information before Submitting form</p>
      </div>

    </div>
  )
}

export default Needform;