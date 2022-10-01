import React from "react";
import "../style/Main.css";
import BgVideo from "../video/bgVideo.mp4";
import { Link } from "react-router-dom";
export default function Body() {
  return (
    <body>
      <div class="s01">
        <video autoPlay muted loop id="myVideo">
          <source src={BgVideo} type="video/mp4" />
        </video>
        <form className="z-index">
          <fieldset>
            <legend>Discover the Amazing Space</legend>
          </fieldset>
          <div class="inner-form">
            <div class="input-field first-wrap">
              <input
                id="search"
                type="text"
                placeholder="What are you looking for?"
              />
            </div>
            <div class="input-field third-wrap">
              <Link to="/search">
                <button class="btn-search" type="button ">
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
