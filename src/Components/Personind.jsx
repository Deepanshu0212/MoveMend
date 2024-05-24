import React, { useState } from 'react'
import "../css/Personind.css"
import { Link } from "react-router-dom";
const Personind = ({ name, speciality, interest,ser}) => {
  const [dis, setdis] = useState(false);
  const [icon, seticon] = useState("fa-solid fa-chevron-down")
  console.log(ser);
  const change = () => {
    if (dis === false) {
      setdis(true);
      seticon("fa-solid fa-chevron-up")
    }
    else {
      setdis(false);
      seticon("fa-solid fa-chevron-down")
    }

  }

  return (
    <div class="per">
      <div class="pracname">
        <div>
          <h5>{name}</h5>
          <h6>{speciality}</h6>
        </div>
        <div>
          <button class="moreinfo" onClick={change}> More info <i class={icon} ></i></button>
          <a href="calender.html">
            <Link to="calender" state={{name,ser}}><button class="btn btn-primary">Select <i class="fa-solid fa-chevron-right"></i></button></Link>
          </a>
        </div>
      </div>

      {dis && <div class="hid">
        <h6>Treating Interests:</h6>
        <ol>
          {interest.map((data) => {
            return <li>{data}</li>
          })}
        </ol>
      </div>}

    </div>
  )
}

export default Personind