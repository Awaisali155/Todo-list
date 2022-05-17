import react from "react";
import "./App.css";
import Panding from "./Panding";

import { useState, useEffect } from "react";
function App() {
  const [input, setinput] = useState("");
  const [ptask, setptask] = useState([]);

  // ........................for add data
  const record = { id: new Date().getTime().toString(), task: input };
  const padd = () => {
    if (input.length === 0) {
    } else {
      setptask([...ptask, record]);
      setinput("");
    }
  };
  // .............for panding component
  const deletetask = (item) => {
    const out = ptask.filter((i) => {
      return item.id !== i.id;
    });
    setptask(out);
  };

  return (
    <div className="main">
      <h1 className="header">Add task</h1>
      <div className="container">
        <input
          className="input"
          type="text"
          value={input}
          placeholder="Enter task here"
          onChange={(e) => setinput(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => {
            padd();
          }}
        >
          Add
        </button>
      </div>
      <Panding
        ptask={ptask}
        setptask={setptask}
        deletetask={deletetask}
        padd={padd}
      />
    </div>
  );
}

export default App;
