import React from "react";
import JSONTree from "react-json-tree";
import "./JsonViewer.css";


function JsonViewer({ Data }) {
  return (
    <div className="json-viewer">
      <JSONTree data={Data} />
    </div>
  );
}

export default JsonViewer;
