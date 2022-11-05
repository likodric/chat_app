import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import SingleUser from "../SingleUser/SingleUser";
import "./Table.scss";

interface TableProp {
  users: any;
  fileList: any;
}
const Table = ({ users, fileList }: TableProp) => {
  const navigate = useNavigate();

  return (
    <div className="table">
      <Button onClick={() => navigate("/")}> idi na table</Button>
      {users.map((singleUser: any, key: number) => {
        return <SingleUser user={singleUser} key={key} fileList={fileList} />;
      })}
    </div>
  );
};

export default Table;
