import React,{useEffect} from 'react'
import servicedata from '../Data/servicebox'
import Servicebox from '../Components/Servicebox'
import Servicedata from '../Components/Servicedata'
import "../css/service.css"
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Bookappoint from '../Components/Bookappoint'
import { Link } from "react-router-dom";
const Service = () => {

  console.log({ servicedata })
  useEffect(() => {
    // Ensure any scroll-related issues are handled here
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
        document.body.style.margin = '0';
        document.documentElement.style.margin = '0';
        document.body.style.padding = '0';
        document.documentElement.style.padding = '0';
}, []);
  return (
    <div className="servico">
      <Navbar logo="/MovemendLogo.png" />
      <section className="section1">
        <div className="container">
          <div className="heading1"><span>Our Services</span></div>
          <div className="buttons">
            <Link to="/"><span className="w-btn-label">Home</span></Link><i class="fa-solid fa-chevron-right"></i>
            <Link to="/services"><span className="w-btn-label"> Services</span></Link>
          </div>
        </div>
      </section>
      <Servicedata />
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 ab">
          {
            servicedata.map((data) => {
              return <Servicebox heading={data.heading} image={data.image} />;
            })
          }
        </div>
      </div>
      <Bookappoint />
      <Footer />
    </div>
  )
}

export default Service