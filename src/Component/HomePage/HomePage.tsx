import { LikeOutlined, WechatOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Input, Menu, Modal, Slider, Tabs } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { NewUser } from "../../userType";
import Chat from "../Chat/Chat";
import MyProfile from "../MyProfile/MyProfile";
import SingleUser from "../SingleUser/SingleUser";
import UserOnHomePage from "../UserOnHomePage/UserOnHomePage";
import "./HomePage.scss";

interface HomePageProp {
  users: any;
}

function HomePage({ users }: HomePageProp) {
  const [filterUserModal, setFilterUserModal] = useState<boolean>(false);
  const [filteredUsersByName, setFilterUsersByName] = useState<string>("");
  const [showMyProfile, setShowMyProfile] = useState<boolean>(false);
  const [openChat, setOpenChat] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="homePage">
      {openChat ? <Chat setOpenChat={setOpenChat} /> : null}

      <div className="header">
        <Button
          className="buttonInHeader"
          onClick={() => setShowMyProfile(false)}
        >
          Pocetna
        </Button>
        <Button
          className="buttonInHeader"
          onClick={() => setFilterUserModal(true)}
        >
          Pretraga
        </Button>
        <Button
          className="buttonInHeader"
          onClick={() => setShowMyProfile(true)}
        >
          Moj Profil
        </Button>
        <Button className="buttonInHeader" onClick={() => handleLogout()}>
          izloguj se
        </Button>
      </div>
      {showMyProfile ? (
        <MyProfile />
      ) : (
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
          <div className="story">radi me na stori breee </div>
          <div className="premiumUser">
            {users.map((user: any, i: number) => {
              return (
                <UserOnHomePage user={user} key={i} setOpenChat={setOpenChat} />
              );
            })}
          </div>
          <div className="filteredUser"></div>
          <div className="onlineUsers">Aktivni cetovi</div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
