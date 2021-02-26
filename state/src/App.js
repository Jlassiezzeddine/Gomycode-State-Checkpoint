import React, { Component } from "react";

import "./App.css";
import personImg from "./images/personImg.jpg";
import Profile from "./Profile";

export default class App extends Component {
  constructor(props) {
    super(props);
    let Person = {
      fullName: "John Doe",
      bio: "Lorem ipsum dolor sit amet",
      imgSrc: personImg,
      profession: "Fullstack Developer",
      show: false,
    };

    this.state = Person;
  }

  render() {
    const { fullName, bio, imgSrc, profession, show } = this.state;

    const handleClick = () => {
      this.setState((prevState) => ({
        show: !prevState.show,
      }));
    };

    //this.setState((prevState)=>{console.log(prevState);})

    return (
      <div>
        <button onClick={handleClick}>Toggle</button>
        {this.state.show ? (
          <React.Fragment>
            <Profile
              fullName={fullName}
              profession={profession}
              bio={bio}
              imgSrc={imgSrc}
            />
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}
