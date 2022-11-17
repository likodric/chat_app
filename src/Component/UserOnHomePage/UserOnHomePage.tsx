import { Button } from "antd";
import React from "react";
import "./UserOnHomePage.scss";

interface UserOnHomePageProp {
  user: any;
  setOpenChat: any;
}

const UserOnHomePage = ({ user, setOpenChat }: UserOnHomePageProp) => {
  return (
    <div className="userOnHomePage">
      <div className="image">slika</div>
      <h1>{user.name}</h1>
      <Button onClick={() => setOpenChat(true)}>Posalji poruku</Button>
    </div>
  );
};

export default UserOnHomePage;
