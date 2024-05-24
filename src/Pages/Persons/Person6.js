import Navbar from "../../Components/Navbar";
import Footer from '../../Components/Footer';
import './Persons.css';
import Bookappoint from "../../Components/Bookappoint";
import { Link } from "react-router-dom";

function Person6(){
  function hideshow(num) {
    for (let i = 1; i <= 3; i++) {
        var which = "content" + i;
        var content = document.getElementById(which);
        if (i === parseInt(num)) {
            content.style.display = "block";
        }
        else {
            content.style.display = "none";
        }
    }
  }
    return(
        <div className="persons">
        <Navbar logo="/MovemendLogo.png"/>
        <div style={{height: "10.4vh"}}></div>
        <section className="row mx-0 section1">
            <div className="col-md-6 p-0 sub-container1">
                <img style={{width: "100%"}} src="/About-team-imgs/rick.jpg" alt="" />
                </div>
                <div className="col-md-6 sub-container2">
      <h3><span className="heading">About Rick</span></h3>
      <p className="para">As an Exercise Physiologist, Rick has diverse clinical interests. He developed his passion for rehabilitation from a young age as a footballer and then rehab coordinator at Geelong Falcons football club. He has always been committed to keeping people healthy and active.</p>
      <div className="buttons">
        <button id="first" className="btn" onClick={() => hideshow('1')}>Clinical Interests</button>
        <button className="btn" onClick={() => hideshow('2')}>Qualifications</button>
        <button className="btn" onClick={() => hideshow('3')}>Locations</button>
      </div>
      <div style={{margin: "0vw 5.5vw"}}>
        <hr/>
      </div>
      <div className="content" id="content1">
        <p>Balance and Falls Prevention</p>
        <p>Chronic Pain</p>
        <p>Cancer</p>
      </div>
      <div className="content" id="content2">
        <p>Masters of Clinical Exercise Physiology</p>
        <p>Bachelor of Exercise Sport Science</p>
      </div>
      <div className="content" id="content3">
        <p>Newtown</p>
        <p>Ocean Grove</p>
      </div>
    </div>
        </section>
        <Bookappoint />
        <Footer/>
        </div>
    );
}
export default Person6;