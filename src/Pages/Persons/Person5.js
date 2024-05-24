import Navbar from "../../Components/Navbar";
import Footer from '../../Components/Footer';
import './Persons.css';
import Bookappoint from "../../Components/Bookappoint";
import { Link } from "react-router-dom";
function Person5(){
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
                <img style={{width: "100%"}} src="/About-team-imgs/lucy.jpg" alt="" />
                </div>
                <div className="col-md-6 sub-container2">
                <h3><span className="heading">About Lucy</span></h3>
                <p className="para">Lucy completed her Physiotherapy Honors degree at Monash University. She enjoys working with
                    patients across all walks of life; including neurological rehabilitation, strength and conditioning in athletic
                    and aging populations, as well as acute and chronic overuse injuries. While working for Geelong Cats AFL as a
                    sports trainer, Lucy has a keen interest in injury management, rehabilitation and prevention. She employs a
                    range of manual therapies, in combination with exercise prescription, Clinical Pilates and hydrotherapy to
                    accomplish this.
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
                    <p>Ankles and knees</p>
                    <p>Sporting injuries</p>
                    <p>Adolescent/ youth conditions</p>
                    <p>Post-operative rehabilitation</p>
                </div>
                <div className="content" id="content2">
                    <p>Physiotherapy (Honors) degree at Monash University.</p>
                </div>
                <div className="content" id="content3">
                    <p>Ocean Grove</p>
                    <p>Newtown</p>
                </div>
                </div>
        </section>
        <Bookappoint />
        <Footer/>
        </div>
    );
}
export default Person5;