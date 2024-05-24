import Navbar from "../../Components/Navbar";
import Footer from '../../Components/Footer';
import './Persons.css';
import Bookappoint from "../../Components/Bookappoint";
import { Link } from "react-router-dom";

function Person2(){
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
                    <img style={{width: "100%"}} src="/About-team-imgs/ash.jpg" alt="" />
                    </div>
                    <div className="col-md-6 sub-container2">
                    <h3><span className="heading">About Ashleigh</span></h3>
                    <p className="para">Through completing her Physiotherapy (Honours) Degree at Monash University, Ashleigh has
                        gained experience with a range of patients throughout all stages of healing from acute sports injuries
                        at local football and soccer clubs to acute inpatient rehabilitation, chronic pain management and
                        working in hydrotherapy rehabilitation for joint replacement, musculoskeletal and neurological patients.
                    </p>
                    <div className="buttons">
                        <button id="first" className="btn" onClick={() => hideshow('1')}>Clinical Interests</button>
                        <button className="btn" onClick={() => hideshow('2')}>Qualifications</button>
                        <button className="btn" onClick={() => hideshow('3')}>Locations</button>
                    </div>
                    <div style={{margin: "0vw 5.5vw"}}>
                        <hr/>
                    </div>
                    <div className="content" id="content1">
                        <p>Lower limb injuries</p>
                        <p>Physical and psychological implications of pain</p>
                        <p>Performers and athletes</p>
                    </div>
                    <div className="content" id="content2">
                        <p>Doctor of Physiotherapy</p>
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
export default Person2;