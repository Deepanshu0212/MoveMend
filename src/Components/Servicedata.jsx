import React from 'react'
import '../css/servicedata.css'
import img from "../images/Services-imgs_1/services-main.jpg"
const Servicedata = () => {
  return (
    <div className="servdata">
        <div className="container">
            <div className="row">
                <div className="col-md-6" id="content">
                    <div>
                        <h1>Experience Our Extensive Services</h1>
                        <p>We truly believe in a patient focused care model, by offering a range of services under the one
                            roof and a team approach we want to help you 'Move Through Life'.</p>
                        <br/>
                        <p>Our aim is to identify your health goals and create a plan to achieve these. This may mean
                            working with just one of our practitioners or utilising other services to help you achieve this.
                            Our team collaborates together and most importantly communicates with you, to get you to your
                            health goals.</p>
                    </div>
                </div>
                <div className="col-md-6" id="main-img">
                    <img src={img} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Servicedata