import React, { Component } from "react";
import Image from "./components/Image/image";
import Wrapper from "./components/Wrapper/wrapper";
import images from "./images.json";
import "./App.css";

let guesses = [];
let score = 0;

class App extends Component {
  state= {
    images
  };

  guess = id => {
    console.log(id);
    // push the id into an array
    guesses.push(id);
    console.log("Guesses: " + guesses);
    
    // check to see if it's already in the array
    for (var i = 0; i < guesses.length; i++){
      // if it is, reset score to 0 and alert the player that they lost
      if (id === guesses[i-1]){
        alert("you already guessed that");
        guesses = [];
        score = 0;
        return;
      } 
    }
    score++
    console.log("Score: " + score);
    // shuffle the images
    
  };

  render(){
    return (
      <Wrapper>
        {this.state.images.map(image => (
          <Image
          id={image.id}
          key={image.id}
          link={image.link}
          guess={this.guess}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;