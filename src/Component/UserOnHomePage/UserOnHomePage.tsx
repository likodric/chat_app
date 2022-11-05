import React from "react";
import "./UserOnHomePage.scss";

interface UserOnHomePageProp {
  user: any;
}

const UserOnHomePage = ({ user }: UserOnHomePageProp) => {
  return (
    <div className="userOnHomePage">
      <div className="image">slika</div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default UserOnHomePage;
