import React from "react";
import "../style/Main.css";
import BgVideo from "../video/bgVideo.mp4";
import sendData from "../api/sendData";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Body() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?value=${searchText}`);
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <body>
      <div class="s01">
        <video autoPlay muted loop id="myVideo">
          <source src={BgVideo} type="video/mp4" />
        </video>
        <form className="z-index" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Discover the Amazing Space</legend>
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
              <Link to={`/search?value=${searchText}`}>
                <button class="btn-search" type="button">
                  Search
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
}
