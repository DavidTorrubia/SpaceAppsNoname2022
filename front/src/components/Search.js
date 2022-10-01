import React, { useState, useEffect } from "react";
import HeaderSecondaryNav from "./HeaderSecondaryNav";
import SearchBody from "./SearchBody";
import { useLocation } from "react-router-dom";
import sendData from "../api/sendData";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Search() {
  let query = useQuery();

  const [results, setResults] = useState([]);

  useEffect(() => {
    if(query.get('value')) {
      sendData(query.get('value'), (data) => {
        setResults(data);
      });
    }
  }, [query]);

  return (
    <div className="Search">
      <HeaderSecondaryNav />
      <SearchBody />
    </div>
  );
}
