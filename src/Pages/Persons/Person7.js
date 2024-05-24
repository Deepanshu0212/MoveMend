import Navbar from "../../Components/Navbar";
import Footer from '../../Components/Footer';
import './Persons.css';
import Bookappoint from "../../Components/Bookappoint";
import { Link } from "react-router-dom";

function Person7(){
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
            <img style={{width: "100%"}} src="/About-team-imgs/will.jpg" alt="" />
            </div>
            <div className="col-md-6 sub-container2">
            <h3><span className="heading">About Will</span></h3>
            <p className="para">Will is a passionate Myotherapist who loves to see his clients move well and achieve their goals.
                He works with a wide-range of clientele ranging from elite sporting teams and athletes - junior and senior, with
                the NDIS community and corporate workers. Some common conditions he treats include sporting injuries, mobility
                and movement concerns, lower back pain and shoulder pain.</p>
            <div className="buttons">
                <button id="first" className="btn" onClick={() => hideshow('1')}>Clinical Interests</button>
                <button className="btn" onClick={() => hideshow('2')}>Qualifications</button>
                <button className="btn" onClick={() => hideshow('3')}>Locations</button>
            </div>
            <div style={{margin: "0vw 5.5vw"}}>
                <hr/>
            </div>
            <div className="content" id="content1">
                <p>Low back pain</p>
                <p>Sport Injuries</p>
                <p>Postural complaints</p>
            </div>
            <div className="content" id="content2">
                <p>Advanced Diploma Myotherapy</p>
                <p>Bachelor Exercise & Sports Science</p>
            </div>
            <div className="content" id="content3">
                <p>Windsor</p>
            </div>
            </div>
        </section>
        <Bookappoint />
        <Footer/>
        </div>
    );
}
export default Person7;