import { LikeOutlined, WechatOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Input, Menu, Modal, Slider, Tabs } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { NewUser } from "../../userType";
import SingleUser from "../SingleUser/SingleUser";
import UserOnHomePage from "../UserOnHomePage/UserOnHomePage";
import "./HomePage.scss";

interface HomePageProp {
  users: any;
}

function HomePage({ users }: HomePageProp) {
  const [filterUserModal, setFilterUserModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="homePage">
      <div className="header">
        <Button className="buttonInHeader">Pocetna</Button>
        <Button
          className="buttonInHeader"
          onClick={() => setFilterUserModal(true)}
        >
          Pretraga
        </Button>
        <Button className="buttonInHeader">Moj Profil</Button>
        <Button className="buttonInHeader" onClick={() => handleLogout()}>
          izloguj se
        </Button>
      </div>
      {/* <div className="welcomeMessage">
        <p>Dobro dosao nazad</p>
        <span className="progress"></span>
      </div> */}

      <div className="body">
        <Modal
          visible={filterUserModal}
          onCancel={() => setFilterUserModal(false)}
        >
          Pretrazi korisnike po: Ime/Prezime
          <Input placeholder="Ime/Prezime" />
          <Input placeholder="" />
          Godine od-do{" "}
          <Slider range={{ draggableTrack: true }} min={18} max={80}></Slider>
          <Input />
        </Modal>
        <div className="story"> </div>
        <div className="premiumUser">
          {users.map((user: any, i: number) => {
            return <UserOnHomePage user={user} key={i} />;
          })}
        </div>
        <div className="filteredUser"></div>
        <div className="onlineUsers">Aktivni cetovi</div>
      </div>
    </div>
  );
}

export default HomePage;
