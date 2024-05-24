import React, { useState } from 'react'
import Bookservice from '../Components/Bookservice'
import serdata from '../Data/service'
import data from "../Data/service2"
import Needform from '../Components/Needform'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import "../css/Book.css"

const Book = () => {

  const [btn, setbtn] = useState(true)

  const changebtnapp = () => {
    setbtn(true);
  }
  const changebtngrp = () => {
    setbtn(false);
  }

  return (
    <div class="booko">
      <Navbar logo="/MovemendLogo.png" />
      <div style={{height: "15vh"}}></div>
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h5>Select a Service</h5>
            <p>Prices are inclusive of tax,if applicable</p>
            <div class="btn-group" role="group">
              <button class="btn11 appo1" onClick={changebtnapp}>Appointments</button>
              <button class="btn11 group1" onClick={changebtngrp}>Group Sessions</button>
            </div>
            {
              serdata.map((data) => {
                return btn && <Bookservice name={data.name} arr={data.arr} />
              })
            }
            {
              data.map((data) => {
                return !btn && <Bookservice name={data.name} arr={data.arr} />
              })
            }
          </div>
          <br></br>

          <div class="col-md-4">
            <Needform />
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  )
}

export default Book
