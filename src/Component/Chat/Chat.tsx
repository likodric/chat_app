import { CloseOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useState } from "react";
import "./Chat.scss";
import Message from "./Message";

interface ChatProp {
  setOpenChat: any;
}

const Chat = ({ setOpenChat }: ChatProp) => {
  const [message, setMessage] = useState<string>();
  const [updateMessage, setUpdateMessage] = useState<string>();

  const saveMessage = (e: any) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    console.log(message);

    setUpdateMessage(message);
    console.log(updateMessage);
  };
  return (
    <div className="chat">
      <div className="userName">
        ime ovde{" "}
        <CloseOutlined className="x" onClick={() => setOpenChat(false)} />
      </div>
      <div className="placeForMessages">
        <div className="mesageInChat">{updateMessage}</div>
      </div>
      <div className="inputWrapper">
        <Input className="inputForMessages" onChange={saveMessage}></Input>
        <Button type="primary" htmlType="submit" onClick={sendMessage}>
          possaljii
        </Button>
      </div>
    </div>
  );
};

export default Chat;
