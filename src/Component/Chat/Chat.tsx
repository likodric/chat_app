import { CloseOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useState } from "react";
import "./Chat.scss";

const Chat = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {};
  return (
    <div className="chat">
      <div className="userName">
        ime ovde <CloseOutlined className="x" />
      </div>
      <div className="placeForMessages"></div>
      <div className="inputWrapper">
        <Input className="inputForMessages"></Input>
        <Button type="primary">possaljii</Button>
      </div>
    </div>
  );
};

export default Chat;
