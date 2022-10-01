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

  const sampleData = [ 
    {
      titulo: query.get('value') + " Research Paper",
      url: "https://dx.doi.org/10.1103/physrevlett.107.065001",
      kw: [query.get('value') + "1", query.get('value') + "2", query.get('value') + "3"],
      cuerpo: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, " +
        "making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure" 
    },
    {
      titulo: query.get('value') + " Research Paper",
      url: "https://dx.doi.org/10.1103/physrevlett.107.065001",
      kw: [query.get('value') + "1", query.get('value') + "2", query.get('value') + "3"],
      cuerpo: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, " +
        "making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure" 
    },
    {
      titulo: query.get('value') + " Research Paper",
      url: "https://dx.doi.org/10.1103/physrevlett.107.065001",
      kw: [query.get('value') + "1", query.get('value') + "2", query.get('value') + "3"],
      cuerpo: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, " +
        "making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure" 
    },
  ];

  useEffect(() => {
    if(query.get('value')) {
      sendData(query.get('value'), (response) => {
        // setResults(response);
        let newSample = sampleData;
        setResults(newSample);
      });
    }
  }, [query]);

  useEffect(() => {
    console.log(results)
  }, [results])

  return (
    <div className="Search">
      <HeaderSecondaryNav />
      <SearchBody results={results}/>
    </div>
  );
}
