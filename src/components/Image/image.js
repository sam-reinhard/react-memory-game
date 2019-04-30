import React from "react";
import "./style.css";

function Image(props) {
  return (
    <div className="col-md-3 img-div">  
        <img onClick={() => props.guess(props.id)} src={props.link} alt="Memory Game Card" />
    </div>    
  );
}

export default Image;