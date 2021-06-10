import React from "react";
import "./HowTo.css";
import Collapsible from "react-collapsible";

function HowTo() {

  return (
    <div className="how-to">
      <h3>How To Use ?</h3>
      <Collapsible  className="collapse" transitionTime={100} trigger="Get All Movies">
        <p>
        URL/api/v2/movies 
        </p>    
  <br />
        <p>
      URL/api/v2/movies/?{"Genre="} 
        </p>
        <ul>
            <li>Drama</li>
            <li>Adventure</li>
            <li>Comedy</li>
            <li>Thriller...</li>
          
        </ul>
<br />
        <p>
      URL/api/v2/movies/?{"language="} 
        </p>
        <ul>
            <li>English</li>
            <li>Spanish</li>
            <li>Korean</li>
            <li>Hindi...</li>
          
        </ul>
       
      </Collapsible>
      <Collapsible  className="collapse" transitionTime={100} trigger="Get Movies by Years">
        <p>
        URL/api/v2/movies/{"{Year}"} 
        </p>
        <ul>
            <li>2021</li>
            <li>2020</li>
            <li>2019</li>
            <li>2018</li>
            <li>2017 .. 2015</li>
        </ul>
      
       
      </Collapsible>
      <Collapsible className="collapse" transitionTime={100} trigger="Get Movies by Language">
      <p>
      URL/api/v2/movies/{"{Year}"}?{"language="} 
        </p>
        <ul>
            <li>English</li>
            <li>Spanish</li>
            <li>Korean</li>
            <li>Hindi...</li>
          
        </ul>
       
      </Collapsible>
      <Collapsible className="collapse" transitionTime={100} trigger="Get Movies by Genre">
      <p>
      URL/api/v2/movies/{"{Year}"}?{"Genre="} 
        </p>
        <ul>
            <li>Drama</li>
            <li>Adventure</li>
            <li>Comedy</li>
            <li>Thriller...</li>
          
        </ul>
       
      </Collapsible>
    </div>
  );
}

export default HowTo;
