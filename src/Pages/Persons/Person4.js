import Navbar from "../../Components/Navbar";
import Footer from '../../Components/Footer';
import './Persons.css';
import Bookappoint from "../../Components/Bookappoint";
import { Link } from "react-router-dom";
function Person4(){
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
                <img style={{width: "100%"}} src="/About-team-imgs/lachlan.jpg" alt="" />
            </div>
            <div className="col-md-6 sub-container2">
                <h3><span className="heading">About Lachlan</span></h3>
                <p className="para">A caring and knowledgeable practitioner, Lachlan enjoys treating a wide range of patient
                    presentations, whilst his passion lies in treating acute pain; especially those involving the neck and back.</p>
                <div className="buttons">
                    <button id="first" className="btn" onClick={() => hideshow('1')}>Clinical Interests</button>
                    <button className="btn" onClick={() => hideshow('2')}>Qualifications</button>
                    <button className="btn" onClick={() => hideshow('3')}>Locations</button>
                </div>
                <div style={{margin: "0vw 5.5vw"}}>
                    <hr/>
                </div>
                <div className="content" id="content1">
                    <p>Neck/shoulder pain</p>
                    <p>Low + mid back pain</p>
                    <p>Postural deficiencies</p>
                    <p>Teenagers + young adults</p>
                </div>
                <div className="content" id="content2">
                    <p>Bachelor of Science (Clinical Science)</p>
                    <p>Master of Health Science (Osteopathy)</p>
                </div>
                <div className="content" id="content3">
                    <p>Blackburn</p>
                </div>
            </div>
        </section>
        <Bookappoint />
        <Footer/>
        </div>
    );
}
export default Person4;