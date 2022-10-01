import React from "react";
import "../style/Main.css";
import BgVideo from "../video/bgVideo.mp4";
import sendData from "../api/sendData";
import { useState } from "react";

export default function Body() {
  const [searchText, setSearchText] = useState('');

  const handleChange = event => {
    setSearchText(event.target.value);

    console.log('value is:', event.target.value);
  };

  return (
    <body>
      <div class="s01">
        <video autoPlay muted loop id="myVideo">
          <source src={BgVideo} type="video/mp4" />
        </video>
        <form className="z-index">
          <fieldset>
            <legend>Discover the Amazing City</legend>
          </fieldset>
          <div class="inner-form">
            <div class="input-field first-wrap">
              <input
                id="search"
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="What are you looking for?"
              />
            </div>
            <div class="input-field third-wrap">
              <button class="btn-search" type="button" onClick={() => { sendData(searchText) }}>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
}