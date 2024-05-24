import React from "react";
import "../Pages/MeetTeam.css";
import { Link } from "react-router-dom";

function MeetCard({ images, index, person, service, p }) {
  return (
    <div className={`card-container`}>
      <div className="col p-0 card text-center">
        <Link to={`/meet-team/person${index}`}>
          <img className="card-img-top" src={images} alt="." style={{ width: "100%" }}/>
        </Link>
        <div className="card-body p-0 mt-2">
          <span className="card-title" style={{ fontSize: "1.3rem" }}>{person}</span>
          <hr />
          <span><strong>{service}</strong></span>
          <p className="card-text">{p}</p>
          <Link to={`/meet-team/person${index}`} className="btn">See Profile</Link>
        </div>
      </div>
    </div>
  );
}
export default MeetCard;
