import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div>
        <div className="header">
            <h1>Remember That Flag!</h1>
        </div>
        <div className="container">
            <h2>Your Score: {props.score}</h2>
            <p>{props.message}</p>
            <div className="row text-center">{props.children}</div>
        </div>
    </div> 
  );
}

export default Wrapper;