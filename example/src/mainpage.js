import React, { Component } from "react";
import { Tree } from "tree-graph-flex";
import "./mainPage.css"
import { data, dataJson } from "./exampleData"
import prettyHtml from "json-pretty-html"

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
        <div className="data-container content-container">
          <p className="container-header">Source object</p>
          <div 
            dangerouslySetInnerHTML={{
              __html: prettyHtml(dataJson, dataJson.dimensions)
            }}
          />
        </div>

        <div className="props-container content-container">
          <p className="container-header">Properties</p>
          <form className="props-form">
            <p className="fild-name">data</p>
            <input name="data" type="text" placeholder="data" size="26"/>
            <p className="fild-name">nodeContent</p>
            <input name="nodeContent" type="text" placeholder="node => <div> {node.subject}" size="26"/>
            <p className="fild-name">yOffset</p>
            <input name="yOffset" type="text" placeholder="50" size="26"/>
            <p className="fild-name">xOffset</p>
            <input name="xOffset" type="text" placeholder="level => 30 + level * 10" size="26"/> 
            <p className="fild-name">nodeWidth</p>
            <input name="nodeWidth" type="text" placeholder="100" size="26" />
            <p className="fild-name">nodeHeight</p>
            <input name="nodeHeight" type="text" placeholder="25" size="26"/>
            <p className="fild-name">pathShape</p>
            <input name="pathShape=" type="text" placeholder="'bezier'" size="26"/>
            <p className="fild-name">lineClassName</p>
            <input name="lineClassName=" type="text" placeholder="connectingLine" size="26"/>
            <input type="submit" className="submit-bottom"></input>
          </form>
        </div>

        <div className="tree-container content-container">
          <Tree data={data}
          nodeContent={node}
          yOffset={50}
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