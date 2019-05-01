import React, { Component } from "react";
import Image from "./components/Image/image";
import Wrapper from "./components/Wrapper/wrapper";
import images from "./images.json";
import "./App.css";

let guesses = [];

class App extends Component {
  state= {
    images,
    score: 0,
    message: "Click a flag to begin!"
  };

  guess = id => {
    // push the id into an array
    guesses.push(id);
    
    // check to see if it's already in the array
    for (var i = 0; i < guesses.length; i++){
      // if it is, reset score to 0 and alert the player that they lost
      if (id === guesses[i-1]){
        guesses = [];
        this.setState({
          score: 0,
          message: "Sorry, you lost..."
        });
        return;
      } else if (this.state.score <= 11){
        this.setState({
          score: this.state.score + 1,
          message: "Nice guess!"
        });
      } else {
        this.setState({
          score: 0,
          message: "You won!"
        });
      }
    }  
    console.log(this.state.score);
    this.shuffle(images);
  };

  shuffle = imagesArray => {
    for (let i = imagesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagesArray[i], imagesArray[j]] = [imagesArray[j], imagesArray[i]];
    }
    return imagesArray;
  };

  render(){
    return (
      <Wrapper
      score={this.state.score}
      message={this.state.message}
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