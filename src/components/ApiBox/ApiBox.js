import React, { useState } from "react";
import InputApi from "../InputApi/InputApi";
import JsonViewer from "../JsonView.js/JsonViewer";
import "./ApiBox.css";
// eslint-disable-next-line
import axios from "axios";
import LinkApi from "../LinkApi/LinkApi";
import Result from "../Results/Result";
import HowTo from "../HowTo/HowTo";

function ApiBox() {
  const [Data, setData] = useState([]);
  const [Link, setLink] = useState(null);
  const [Loaging, setLoaging] = useState(false);
  const [Error, setError] = useState(null);

  // eslint-disable-next-line
  const [Heroku, setHeroku] = useState(
    "https://api-netflix.herokuapp.com/api/v2/"
  );
  // eslint-disable-next-line
  const [Localhost, setLocalhost] = useState("http://localhost:5000/api/v2/");

  const Get = (endpoint) => {
    setLoaging(true);
    if (endpoint.length === 0) return;

    axios
      .get(Heroku + endpoint)
      .then(function (res) {
        setError(null);
        setLoaging(false);
        console.log("get movies");
        setData(res.data);
        setLink(`${Heroku}${endpoint}`);
      })
      .catch(function (error) {
        setData([]);
        setLoaging(false);
        // handle error
        console.log("Endpoint no valid !");
        setError("Endpoint no valid !");
      });
  };

  const to_docs = () =>{
    window.open('https://github.com/AhmedYounsi/Netflix-Movies-API/blob/main/README.md','_blank');
  }

  return (
    <div>
      <div className="api-box">
        <div className="api-box-shadow"> </div>
        <div className="api-content">
          <h1>
            RESTful Netflix API <br /> 
          </h1>
          <h4>All Netflix movies data you'll ever need in one place</h4>
          <h5 onClick={()=> to_docs()}>Check out the docs!</h5>
          <p>Test this API ?</p>
          <InputApi Loaging={Loaging} Get={(endpoint) => Get(endpoint)} />
          {Data.length > 0 && <LinkApi Link={Link} />}
          {Error && <strong className="error"> {Error}</strong>}
        </div>
      </div>
      <hr />

      {Data.length > 0 ? (
        <>
          <div className="resources">
            <i className="fas fa-database"></i>
            <h1>Resources</h1>
          </div>
          <JsonViewer Data={Data} />
        </>
      ) : (
        <div className="results-content">
          <Result />
        </div>
      )}
      <hr />
      <HowTo />
    </div>
  );
}

export default ApiBox;
