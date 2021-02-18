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
      time: 0,
    };

    this.state = Person;
  }
  componentDidMount() {
    this.timer = setInterval(
      () =>
        this.setState((prevState) => ({
          time: prevState.time + 1,
        })),
      1000
    );
  }
  render() {
    const { fullName, bio, imgSrc, profession, time } = this.state;

    const onClick = () =>
      this.state.show === false
        ? this.setState({ show: true })
        : this.setState({ show: false });
    return (
      <div>
        <div className="top">
          <button onClick={onClick}>Toggle</button>
          <p> componentDidMount since : {time} seconds</p>
        </div>
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
