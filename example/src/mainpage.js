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
}

const exampleTree =
  `yOffsetChanger(yOffset) {
  this.setState({ 
  yOffset: yOffset })
}`


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yOffset: 50,
      xOffset: 50,
      nodeHeight: 30,
      nodeWidth: 100,
      pathShape: "bezier"
    }
  }

  yOffsetChanger(yOffset) {
    this.setState({ yOffset: yOffset })
  }

  xOffsetChanger(xOffset) {
    this.setState({ xOffset: xOffset })
  }

  nodeWidthChanger(nodeWidth) {
    this.setState({ nodeWidth: nodeWidth })
  }

  nodeHeightChanger(nodeHeight) {
    this.setState({ nodeHeight: nodeHeight })
  }

  straightChanger() {
    this.setState({ pathShape: "straight" })
  }

  bezierChanger() {
    this.setState({ pathShape: "bezier" })
  }

  roundedAnglesChanger() {
    this.setState({ pathShape: "roundedAngles" })
  }

  pathShapeChanger(pathShape) {
    this.setState({ pathShape: pathShape })
  }



  render() {
    return (
      <div className="main-page">



        <div className="content-container">
          <p className="container-header">Source object</p>
          <div
            dangerouslySetInnerHTML={{
              __html: prettyHtml(dataJson, dataJson.dimensions)
            }}
          />
        </div>

        <div className="content-container">

          {/* <p className="container-header">Code</p> */}

          <pre className="prettyprint lang-html" dangerouslySetInnerHTML={{
            __html: exampleTree
          }}>

          </pre>

          <p className="container-header">Properties</p>
          <div className="props-form">
            <p className="fild-name">yOffset</p>
            <input name="yOffset" type="number" min={1} value={this.state.yOffset} className="input-prop" onChange={event => this.yOffsetChanger(event.target.value)} />
            <p className="fild-name">xOffset</p>
            <input name="xOffset" type="number" min={10} value={this.state.xOffset} className="input-prop" onChange={event => this.xOffsetChanger(event.target.value)} />
            <p className="fild-name">nodeWidth</p>
            <input name="nodeWidth" type="number" value={this.state.nodeWidth} className="input-prop" onChange={event => this.nodeWidthChanger(event.target.value)} />
            <p className="fild-name">nodeHeight</p>
            <input name="nodeHeight" type="number" min={20} value={this.state.nodeHeight} className="input-prop" onChange={event => this.nodeHeightChanger(event.target.value)} />


            <p className="fild-name">pathShape</p>
            <div className="dropdown">
              <input name="pathShape=" type="text" value={this.state.pathShape} className="input-prop" />
              <div className="dropdown-content">
                <div className="path-shape" onClick={() => this.bezierChanger()}>bezier</div>
                <div className="path-shape" onClick={() => this.straightChanger()}>straight</div>
                <div className="path-shape" onClick={() => this.roundedAnglesChanger()}>roundedAngles</div>
              </div>
            </div>

            <label for="pathShape" className="fild-name">pathShape</label>
            <select value={this.state.pathShape} name="pathShape" id="pathShape" onChange={(event) => this.pathShapeChanger(event.target.value)}>
              <option value="bezier">bezier</option>
              <option value="straight">straight</option>
              <option value="roundedAngles">roundedAngles</option>
            </select>

          </div>
        </div>

        <div className="content-container">
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