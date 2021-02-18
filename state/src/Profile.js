import React from "react";

const Profile = ({ fullName, bio, profession, imgSrc }) => {
  return (
    <div>
      <div className="profile--card">
        <div className="profile--card--img">
          <img src={imgSrc} />
        </div>
        <div className="profile--card--content">
          <h2 className="profile--card--name">{fullName}</h2>
          <h4 className="profile--card--profession">{profession}</h4>
          <p className="profile--card--bio">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
