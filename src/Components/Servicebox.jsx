import React from 'react';
import "../css/serviceimage.css";
const Servicebox = ({ heading, image }) => {
  return (
    <div className="servimg">
      <div className="col d-flex align-items-start imge" style={{ backgroundImage: `url(${image})` }}>
        <h4>{heading}</h4>
      </div>
    </div>
  )
}
export default Servicebox;