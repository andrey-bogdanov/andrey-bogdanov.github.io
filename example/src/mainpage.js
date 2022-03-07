import React, { Component } from "react";
import { Tree } from "tree-graph-flex";
import "./mainpage.css"

const data = {
  id: "0",
  subject: "animals",
  children: [
    {
      id: "1",
      subject: "dogs",
      children: [
        {
          id: "1.1",
          subject: "terriers",
          children: [],
        },
        {
          id: "1.2",
          subject: "mastiffs",
          children: [],
        },
      ],
    },
    {
      id: "2",
      subject: "birds",
      children: [
        {
          id: "2.1",
          subject: "parrots",
          children: [],
        },
        {
          id: "2.2",
          subject: "crows",
          children: [],
        },
      ],
    },
  ],
};

function node(node) { 
  return (
    <div> 
      {node.subject}
    </div>
  )
};

function xOffset(level) {
  const offset = 30 + level * 10
  return offset
};

class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <div className="tree-container">
          <Tree data={data}
          nodeContent={node}
          yOffset={51}
          xOffset={xOffset}
          nodeWidth={100}
          nodeHeight={25}
          pathShape={"bezier"}
          />
        </div>  
      </div>
    );
  }
}

export default MainPage