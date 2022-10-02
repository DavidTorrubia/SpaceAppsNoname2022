import React, { useEffect } from "react";
import SearchCard from "./SearchCard";
import { Link } from "react-router-dom";
export default function SearchBody(props) {
  useEffect(() => 
    console.log(props.results), [props]);
  return (
    <div class="container bootstrap snippets bootdey">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="well search-result">
            <div class="input-group">
              <span class="input-group-btn"></span>
            </div>
          </div>
            {props.results && props.results.map( result => (
              <SearchCard searchInfo={result} />
            ))}
            {props.results.length == 0 &&
              (<h1 className="errormessage">We couldn't find anything! <br></br> :( </h1>)
            }         
          <div class="row">
            <button type="button" class="btn btn-info  btn-block">
              <i class="glyphicon glyphicon-refresh"></i>Load more...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
