import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div>
        <h1>Flag Memory Game</h1> 
        <div className="container">
            <h2>Your Score: </h2>
            <div class="row text-center">{props.children}</div>
        </div>
    </div> 
  );
}

export default Wrapper;