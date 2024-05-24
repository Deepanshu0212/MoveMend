import Navbar from "../../Components/Navbar";
import Footer from '../../Components/Footer';
import './Persons.css';
import Bookappoint from "../../Components/Bookappoint";
import { Link } from "react-router-dom";
function Person8(){
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
                <img style={{width: "100%"}} src="/About-team-imgs/caitlyn.jpg" alt="" />
                </div>
                <div className="col-md-6 sub-container2">
                    <h3><span className="heading">About Caitlyn</span></h3>
                    <p className="para">Caitlyn has a strong interest in working alongside female athletes, which has driven her to be a
                        part of the medical team at Carlton Football club within the AFLW program. Although sports and professional
                        athletes is a strong focus for Caitlyn, she also holds an equal passion for assisting people who suffer with
                        headaches and postural complaints to achieve their health and movement goals.</p>
                    <div className="buttons">
                        <button id="first" className="btn" onClick={() => hideshow('1')}>Clinical Interests</button>
                        <button className="btn" onClick={() => hideshow('2')}>Qualifications</button>
                        <button className="btn" onClick={() => hideshow('3')}>Locations</button>
                    </div>
                    <div style={{margin: "0vw 5.5vw"}}>
                        <hr/>
                    </div>
                    <div className="content" id="content1">
                        <p>Headaches</p>
                        <p>Amateur athletes</p>
                        <p>Thoracics (fascial slings etc)</p>
                    </div>
                    <div className="content" id="content2">
                        <p>Advanced Diploma in Myotherapy</p>
                        <p>Member of Myotherapy Association Australia</p>
                    </div>
                    <div className="content" id="content3">
                        <p>Hawthorn</p>
                        <p>Windsor</p>
                    </div>
                </div>
        </section>
        
        <Bookappoint />
        <Footer/>
        </div>
    );
}
export default Person8;