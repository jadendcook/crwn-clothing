import React from "react";
import logo from "./logo.svg";
import "./App.css";

import HomePage from "./homepage.component";

function App() {
  return (
    <div>
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 classname="title">HATS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 classname="title">JACKETS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 classname="title">SNEAKERS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 classname="title">WOMENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 classname="title">MENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
