import React, { Component } from "react";
import Image from "./components/Image/image";
import Wrapper from "./components/Wrapper/wrapper";
import images from "./images.json";
import "./App.css";

class App extends Component {
  state= {
    images
  };

  guess = id => {
    console.log(id);
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