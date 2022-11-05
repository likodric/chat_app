import React from "react";
import "./SingleUser.scss";
import { NewUser } from "../../userType";

interface SingleUserProp {
  user: NewUser;
  fileList: any;
}

const SingleUser = ({ user, fileList }: SingleUserProp) => {
  console.log(fileList);

  if (!user) return null;
  return (
    <div className="singleUser">
      <h2> {user.name}</h2>
      <h2> {user.dateOfBirth}</h2>
      <h2> {user.email}</h2>
      <h2> {user.password}</h2>
      <img src={fileList} alt="greska"></img>
    </div>
  );
};

export default SingleUser;
