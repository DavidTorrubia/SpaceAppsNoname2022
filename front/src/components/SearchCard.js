import React, { useState } from "react";
export default function SearchCard(props) {
  return (
    <div class="well search-result">
      <div class="row">
        <a href="#">
          <div class="col-xs-6 col-sm-9 col-md-9 col-lg-10 title">
              <h3>{props.searchInfo.titulo}</h3>
              <p>
                {props.searchInfo.cuerpo}
              </p>
          </div>
        </a>
      </div>
    </div>
  );
}