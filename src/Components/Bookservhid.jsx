// import React , { createContext} from 'react'
// import "../css/Bookserhid.css"
// import { Link } from "react-router-dom";

// const Bookservhid = ({name,time}) => {

//   return (
//     <div class="bookoserhid">
//         <div class="hid1">
//         <h5>{name}</h5>
        
//         <div>{time}</div>
//         <Link to="person"><button class="btn btn-primary">Select</button></Link>
        
//         </div>
//     </div>
//   )
// }

// export default Bookservhid



import React from 'react';
import "../css/Bookserhid.css"
import { Link } from 'react-router-dom';

const Bookservhid = ({ name, time }) => {
  return (
    <div className="bookoserhid">
      <div className="hid1">
        <h5>{name}</h5>
        <div>{time}</div>
        <Link to="/person" state={{name}}> 
          <button className="btn btn-primary">Select</button>
        </Link>
      </div>
    </div>
  );
};

export default Bookservhid;
