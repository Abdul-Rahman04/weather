import "./App.css";

import React from "react";
import { Weather } from "./component/Weather";
// import bakground from "../src/assets/bakground.jpg";
// import html from "../src/assets/html.jpg";
// import css from "../src/assets/css.jpeg";
// import bootstrap from "../src/assets/bootstrap.jpeg";
// import js from "../src/assets/js.png";
// import react from "../src/assets/react.png";
function App() {
  return (
    <>
      <Weather />
      {/* <div className="bakground">
        <img src={bakground} className="bak" alt="" />
        <h1 className="name">G Thangaraj</h1>
        <br />
        <h4 className="mail">thangaraj1354@gmail.com</h4>
        <img src={html} className="html" alt="" />
        <img src={css} className="css" alt="" />
        <img src={js} className="js" alt="" />
        <img src={bootstrap} className="bootstrap" alt="" />
        <img src={react} className="react" alt="" />
      </div> */}
    </>
  );
}

export default App;
