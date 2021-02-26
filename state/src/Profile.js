import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { time: 0 };
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

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { imgSrc, fullName, profession, bio } = this.props;
    return (
      <div>
        <div className="top">
          <p> componentDidMount since : {this.state.time} seconds</p>
        </div>
        <div className="profile--card">
          <div className="profile--card--img">
            <img src={imgSrc} alt="" />
          </div>
          <div className="profile--card--content">
            <h2 className="profile--card--name">{fullName}</h2>
            <h4 className="profile--card--profession">{profession}</h4>
            <p className="profile--card--bio">{bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
