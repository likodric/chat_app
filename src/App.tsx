import React, { useState } from "react";
import "./App.css";
import { NewUser } from "./userType";
import { Route, Routes } from "react-router-dom";
import Table from "./Component/Table/Table";
import LogIn from "./Component/LogIn/LogIn";
import HomePage from "./Component/HomePage/HomePage";

function App() {
  const [users, setUsers] = useState<NewUser[]>([]);
  const [fileList, setFileList] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LogIn
              setUsers={setUsers}
              users={users}
              setFileList={setFileList}
              fileList={fileList}
            />
          }
        ></Route>
        <Route
          path="/table"
          element={<Table users={users} fileList={fileList} />}
        ></Route>
        <Route path="/home" element={<HomePage users={users} />} />
      </Routes>
    </div>
  );
}

export default App;
