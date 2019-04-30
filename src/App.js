import React, { Component } from "react";
import Image from "./components/Image/image";
import Wrapper from "./components/Wrapper/wrapper";
import images from "./images.json";
import "./App.css";

let guesses = [];

class App extends Component {
  state= {
    images,
    score: 0
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
        this.setState({
          score: 0
        });

        return;
      } 
    }
    this.setState({
      score: this.state.score + 1
    });
    // shuffle the images
    
  };

  render(){
    return (
      <Wrapper
      score={this.state.score}
      >
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