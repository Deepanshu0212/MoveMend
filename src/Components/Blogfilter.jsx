import React from 'react'
import "../css/Blogfilter.css"
const Blogfilter = ({ setfilter }) => {

  const fil = (val) => {
    setfilter(val);
  }
  return (
    <div class="blogofilter">
      <div class="container">
        <div class="row one">

          <div class="col-4">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown+" role="button" href="#" data-bs-toggle="dropdown"><span class="full-text">
                <h5>Filter By Category <i class="fa-solid fa-chevron-down"></i></h5>
              </span>
                <span class="short-text">
                  <h5>Filter &nbsp<i class="fa-solid fa-chevron-down"></i></h5>
                </span></a>
              <ul class="dropdown-menu">
                <li onClick={() => fil("Show All")}><a class="dropdown-item" href="#">Show All</a></li>
                <li onClick={() => fil("Physiology")}><a class="dropdown-item" href="#">Physiology</a></li>
                <li onClick={() => fil("Pregnancy")}><a class="dropdown-item" href="#">Pregnancy</a></li>
                <li onClick={() => fil("Basic Health")}><a class="dropdown-item" href="#">Basic Health</a></li>
                <li onClick={() => fil("Exercise")}><a class="dropdown-item" href="#">Exercise</a></li>
                <li onClick={() => fil("Posture")}><a class="dropdown-item" href="#">Posture</a></li>
              </ul>
            </li>
          </div>


          <div class="col-8">
            <div class="col-11"><input type="text" placeholder=" Search for a Post" className="innp" />
            </div>
            <div class="col-1"><i class="fa-solid fa-magnifying-glass"></i></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogfilter