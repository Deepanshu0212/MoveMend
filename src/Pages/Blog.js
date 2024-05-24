import React, { useState } from 'react'
import Blogfilter from '../Components/Blogfilter'
import blogdata from "../Data/blog"
import Blogbox from '../Components/Blogbox'
import "../css/Blog.css"
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Bookappoint from '../Components/Bookappoint'
import { Link } from "react-router-dom";
const Blog = () => {

  const [filter, setfilter] = useState("Show All")

  console.log(filter)
  return (
    <div className="blogo">
      <Navbar logo="/MovemendLogo.png" />
      <section className="section1">
        <div className="container">
          <div className="heading1"><span>Our Blog</span></div>
          <div className="buttons">
            <Link to="/"><span className="w-btn-label">Home <i class="fa-solid fa-chevron-right"></i></span></Link>
            <Link to="/meet-team"><span className="w-btn-label"> Blog</span></Link>
          </div>
        </div>
      </section>

      <br></br> <br></br>
      <Blogfilter setfilter={setfilter} />
      <div class="container a">
        {
          blogdata.map((data) => {
            if (filter === "Show All" || filter === data.name) {
              return <Blogbox head={data.heading} image={data.img} time={data.time} author={data.author} type={data.type} />
            }
            return null;
            // return (filter==="Show All" || filter === data.name) && <Blogbox head={data.heading} image={data.img} time={data.time} author={data.author} type={data.type}/>
          })
        }

      </div>
      <Bookappoint />
      <Footer />
    </div>
  )
}

export default Blog