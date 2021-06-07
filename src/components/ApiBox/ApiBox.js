import React, { useState } from "react";
import InputApi from "../InputApi/InputApi";
import JsonViewer from "../JsonView.js/JsonViewer";
import "./ApiBox.css";
// eslint-disable-next-line
import axios from "axios";
import LinkApi from "../LinkApi/LinkApi";
import Result from "../Results/Result";

function ApiBox() {
  const [Data, setData] = useState([]);
  const [Link, setLink] = useState(null)
  const Get = (endpoint) => {
    if(endpoint.length === 0) return
    axios
      .get(`http://localhost:5000/api/${endpoint}`)
      .then(function (res) {
        setData(res.data);
        setLink(`http://localhost:5000/api/${endpoint}`)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div>
      <div className="api-box">
        <div className="api-box-shadow"> </div>
         <div className="api-content">
         <h1>
            RESTful Netflix API <br /> movies, TV shows, and more.
          </h1>
          <p>Test this API ?</p>
          <InputApi Get={(endpoint) => Get(endpoint)} />
         
         {
           Data.length > 0 &&    
           <LinkApi Link={Link} />
         }
         </div>
     

        </div>
        <hr />
        

        
       
        {
          Data.length > 0 ?    <JsonViewer Data={Data} />
          :
          <div className="results-content">
          <Result />
          </div>
        }
      
       
      </div>
     
    
   
  );
}

export default ApiBox;
