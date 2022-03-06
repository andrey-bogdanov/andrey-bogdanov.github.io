import logo from './logo.svg';
import './App.css';
import { Tree } from "tree-graph-flex"

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
  const offset = 30 + level*10
return offset
};

function App() {
  return (
    <div className="App">
      <Tree data={data}
      nodeContent={node}
      yOffset={50}
      xOffset={xOffset}
      nodeWidth={150}
      nodeHeight={50}
      pathShape={"bezier"}
    />     
    </div>
  );
}

export default App;
