import React from 'react';
import "../css/Blogbox.css"
const Blogbox = ({head,image,time,author,type}) => {
  return (
    <div className="blogobox">
      <div className="abc blog"  style={{backgroundImage:`url(${image})`}}>
        <div className="abcd">
        <h4>{head}</h4>
        <div className="details">
          <p><i className="fa-solid fa-calendar"></i>{time}</p>
          <p><i className="fa-solid fa-user"></i>{author}</p>
          <p><i className="fa-solid fa-pen"></i>{type}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Blogbox