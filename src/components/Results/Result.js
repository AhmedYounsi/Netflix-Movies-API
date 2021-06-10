import React from "react";
import "./Results.css";
function Result() {
  return (
    <div className="results">
      <div className="results-text">
        <h2>Using GET you are able to fetch movie's:</h2>
        <ul className="ul">
          <li>title</li>
          <li>Premiere</li>
          <li>Language</li>
          <li>Runtime</li>
          <li>Poster</li>
        </ul>
      </div>
      <div className="img-gif">
        <img className="gif" src={"./images/gif.gif"} alt="netflix api tv" />
        <img src={"./images/tv2.png"} alt="netflix api tv" />
      </div>
    </div>
  );
}

export default Result;
