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

// function xOffsetFunction(level) {
//   const offset = 30 + level * 10
//   return offset
// };

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yOffset: 20,
      xOffset: 50,
      nodeHeight: 30,
      nodeWidth: 100,
      pathShape: "bezier"
    }
  }

  yOffsetChanger (yOffset) {
    this.setState({yOffset: yOffset})
  }

  xOffsetChanger (xOffset) {
    this.setState({xOffset: xOffset})
  }

  nodeWidthChanger (nodeWidth) {
    this.setState({nodeWidth: nodeWidth})
  }

  nodeHeightChanger (nodeHeight) {
    this.setState({nodeHeight: nodeHeight})
  }

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

          <p className="container-header">Code</p>
            <br></br>
          <p className="container-header">Properties</p>
          <div className="props-form">
            <p className="fild-name">yOffset</p>
            <input name="yOffset" type="number" value={this.state.yOffset} className="input-prop"  onChange={event => this.yOffsetChanger(event.target.value)}/>
            <p className="fild-name">xOffset</p>
            <input name="xOffset" type="number" value={this.state.xOffset} className="input-prop"  onChange={event => this.xOffsetChanger(event.target.value)}/> 
            <p className="fild-name">nodeWidth</p>
            <input name="nodeWidth" type="number" value={this.state.nodeWidth} className="input-prop" onChange={event => this.nodeWidthChanger(event.target.value)}/>
            <p className="fild-name">nodeHeight</p>
            <input name="nodeHeight" type="number" value={this.state.nodeHeight} className="input-prop" onChange={event => this.nodeHeightChanger(event.target.value)}/>
            <p className="fild-name">pathShape</p>
            <input name="pathShape=" type="text" value={this.state.pathShape} className="input-prop input-path-shape"/>
          </div>
        </div>

        <div className="tree-container content-container">
          <Tree 
          
            data={data}
            nodeContent={node}
            yOffset={Number(this.state.yOffset)}
            xOffset={Number(this.state.xOffset)}
            nodeWidth={Number(this.state.nodeWidth)}
            nodeHeight={Number(this.state.nodeHeight)}
            pathShape={this.state.pathShape}
          />
        </div>
      </div>
    );
  }
}

export default MainPage