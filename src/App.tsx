import React, { Fragment } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  let headerProps: {
    Name: string;
    distt: string;
    role: string;
    skills: string;
  } = {
    Name: "tushar",
    distt: "Kurukshetra",
    role: "Frontend Developer",
    skills: "ReactJS",
  };
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Header headerProps={headerProps} />}/>
      </Routes>
    </Fragment>
  );
}

export default App;
