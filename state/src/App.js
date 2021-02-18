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
    const { fullName, bio, imgSrc, profession } = this.state;
    const onClick = () =>
      this.state.show === false
        ? this.setState({ show: true })
        : this.setState({ show: false });
    return (
      <div>
        <div className="top">
          <button onClick={onClick}>Toggle</button>
        </div>
        {this.state.show ? (
          <React.Fragment>
            <p>{this.mountTime}</p>
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
