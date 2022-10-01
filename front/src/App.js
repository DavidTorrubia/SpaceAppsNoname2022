import "./App.css";
import "./components/HeaderNav.js";
import HeaderNav from "./components/HeaderNav.js";
import Body from "./components/Body";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Body />
    </div>
  );
}

export default App;
