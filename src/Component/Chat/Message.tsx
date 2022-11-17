import React from "react";

interface singleMessageProp {
  singleMessage: any;
}

const Message = ({ singleMessage }: singleMessageProp) => {
  return <div className="message">{singleMessage}</div>;
};

export default Message;
