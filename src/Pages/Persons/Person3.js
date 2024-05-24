import Navbar from "../../Components/Navbar";
import Footer from '../../Components/Footer';
import './Persons.css';
import Bookappoint from "../../Components/Bookappoint";
import { Link } from "react-router-dom";

function Person3(){
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
                <img style={{width: "100%"}} src="/About-team-imgs/liana.jpg" alt="" />
                </div>
                <div className="col-md-6 sub-container2">
                    <h3><span className="heading">About Liana</span></h3>
                    <p className="para">As a senior Osteopath Liana is passionate about getting to know her patients and helping
                        them become the best versions of themselves. She loves to keep kids moving pain free and treating
                        headaches, jaw pain and biomechanical strains.</p>
                    <div className="buttons">
                        <button id="first" className="btn" onClick={() => hideshow('1')}>Clinical Interests</button>
                        <button className="btn" onClick={() => hideshow('2')}>Qualifications</button>
                        <button className="btn" onClick={() => hideshow('3')}>Locations</button>
                    </div>
                    <div style={{margin: "0vw 5.5vw"}}>
                        <hr/>
                    </div>
                    <div className="content" id="content1">
                        <p>Headaches & Migraines</p>
                        <p>TMJ / Jaw Pain</p>
                        <p>Vertigo</p>
                        <p>Cranial</p>
                    </div>
                    <div className="content" id="content2">
                        <p>Bachelor of Clinical Science</p>
                        <p>Masters of Health Science (Osteopathy)</p>
                    </div>
                    <div className="content" id="content3">
                        <p>MoveMend Ocean Grove</p>
                    </div>
                </div>
        </section>
        <Bookappoint />
        <Footer/>
        </div>
    );
}
export default Person3;