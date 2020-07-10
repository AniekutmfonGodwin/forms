import React from "react";
import "./helper.css";
import { Quickstart, RegistrationForm } from "./Page";

const App = () => {
  return (
    <div className="app">
      {
        // <RegistrationForm/>||
        <Quickstart />
      }
    </div>
  );
};

export default App;
