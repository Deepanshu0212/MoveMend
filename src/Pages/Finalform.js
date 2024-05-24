// import React from 'react'
// import "../css/Finalform.css"
// import Needform from '../Components/Needform'
// import Footer from '../Components/Footer'
// import Navbar from '../Components/Navbar'
// import { Link , useLocation} from "react-router-dom"; 
// const Finalform = () => {

// 	const location = useLocation();
// 	const {practitioner,service,date,time} = location.state || {};


// 	return (
// 		<div class="fform">
// 			<Navbar logo="/MovemendLogo.png" />
// 			<div style=	{{height: "15vh"}}></div>
// 			<div class="container">
// 				<div class="row">
// 					<div class="col-md-7 div3">
// 						<h4>Tell us your details</h4>
// 						<div class="info">
// 							<form action='abc.txt'>
// 								<div class="your">
// 									<h5>Your Information</h5>
// 									<p><i>We need this information to identify you</i></p>
// 									<p>First Name</p>
// 									<input type="text" class="in" required /><br /><br />
// 									<p>Last Name</p>
// 									<input type="text" class="in" required /><br /><br />
// 									<label>Date of Birth</label>
// 									<input type="date" class="dt" required /><br /><br />
// 								</div>
// 								<br />
// 								<div class="cont">
// 									<h5>Your Contact Details</h5>
// 									<p><i>We need this information to confirm your booking</i></p>
// 									<p>Email Address</p>
// 									<input type="text" class="in" required /><br />
// 									<p>Mobile phone</p>
// 									<input type="number" class="in" required /><br /><br />
// 								</div>
// 								<br />
// 								<h5>Extra Information</h5>
// 								<p>Comments(Optional)</p>
// 								<input type="text" class="in" style={{ height: "150px" }} /><br /><br />
// 								<input type="checkbox" /> &nbsp;
// 								<label>I would like to recieve marketing messages</label><br />
// 								<br />
// 								<Link to="/order" state={{practitioner,service,date,time}}><button class="btn btn-success">Complete Information <i
// 									class="fa-solid fa-chevron-right"></i></button></Link><br /><br />
// 							</form>
// 						</div>
// 					</div>
// 					<div className="col-md-4">
// 						<Needform />
// 					</div>
// 				</div>
// 			</div>
// 			<Footer />
			
// 		</div>
// 	)
// }

// export default Finalform;




import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Finalform.css';
import Needform from '../Components/Needform';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Finalform = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { practitioner, service, date, time } = location.state || {};

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    comments: '',
    marketing: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (form.checkValidity()) {
      navigate('/order', { state: { practitioner, service, date, time, formData } });
    } else {
      form.reportValidity();
    }
  };

  return (
    <div className="fform">
      <Navbar logo="/MovemendLogo.png" />
      <div style={{ height: '15vh' }}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-7 div3">
            <h4>Tell us your details</h4>
            <div className="info">
              <form onSubmit={handleSubmit}>
                <div className="your">
                  <h5>Your Information</h5>
                  <p><i>We need this information to identify you</i></p>
                  <p>First Name</p>
                  <input
                    type="text"
                    className="in"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <br /><br />
                  <p>Last Name</p>
                  <input
                    type="text"
                    className="in"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <br /><br />
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    className="dt"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                  <br /><br />
                </div>
                <br />
                <div className="cont">
                  <h5>Your Contact Details</h5>
                  <p><i>We need this information to confirm your booking</i></p>
                  <p>Email Address</p>
                  <input
                    type="email"
                    className="in"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <p>Mobile phone</p>
                  <input
                    type="tel"
                    className="in"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <br /><br />
                </div>
                <br />
                <h5>Extra Information</h5>
                <p>Comments (Optional)</p>
                <input
                  type="text"
                  className="in"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  style={{ height: '150px' }}
                />
                <br /><br />
                <input
                  type="checkbox"
                  name="marketing"
                  checked={formData.marketing}
                  onChange={handleChange}
                />
                &nbsp;
                <label>I would like to receive marketing messages</label>
                <br /><br />
                <button type="submit" className="btn btn-success">
                  Complete Information <i className="fa-solid fa-chevron-right"></i>
                </button>
                <br /><br />
              </form>
            </div>
          </div>
          <div className="col-md-4">
		  <Needform />
					</div>
				</div>
			</div>
			<Footer />
			
		</div>
	)
}

export default Finalform;
            
