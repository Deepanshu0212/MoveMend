import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import pdata from "../Data/person"
import Personind from '../Components/Personind'
import Needform from '../Components/Needform'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import "../css/personselect.css"
const Personselect = () => {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <div class="perselect">
      <Navbar logo="/MovemendLogo.png" />
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h4>Select a practitioner</h4>
            <div className="pracc">
              <h5>Any practitioner</h5>
              <button class="btn btn-primary"><Link to="/calender" class="btno">Select</Link><i
                class="fa-solid fa-chevron-right"></i></button>
            </div>

            <div class="names">
              {pdata.map((data) => {
                return <Personind name={data.name} speciality={data.speciality} interest={data.interest} ser={name}/>
              })}
            </div>
          </div>
          <div class="col-md-4">
            <Needform />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Personselect