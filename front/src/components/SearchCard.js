import React, { useState } from "react";
export default function SearchCard(props) {
  return (
    <div class="well search-result">
      <div class="row">
        <a href={props.searchInfo.url}>
          <div class="col-xs-6 col-sm-9 col-md-9 col-lg-10 title">
              <h3>{props.searchInfo.title}</h3>
              <h5>{props.searchInfo.author}</h5>
              <p>
                {props.searchInfo.abstract}
              </p>
          </div>
        </a>
      </div>
    </div>
  );
}