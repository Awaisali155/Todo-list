import React from "react";
import { useState } from "react";
import Complete from "./Complete";
import Edit from "./Edit";
import App from "./App";
const Panding = ({
  ptask = { ptask },
  setptask = { setptask },
  deletetask = { deletetask },
  padd = { padd },
}) => {
  const [edititem, setedititem] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [modelIsopen, setmodelIsopen] = useState(false);

  //
  // ........................complete task
  const completetask = (item) => {
    setCompleted([...completed, item]);
    const result = ptask.filter((i) => {
      return item.id != i.id;
    });
    setptask(result);
  };
  // ............................updateitems
  const update = (data) => {
    setedititem(data);
  };
  return (
    <>
      <h1 className="header">Pending task</h1>
      <div>
        {ptask.map((ele, index) => {
          return (
            <div key={index}>
              <h1>{ele.task} </h1>
              <input
                type="checkbox"
                checked={false}
                onChange={() => {
                  completetask(ele);
                }}
              />

              <button
                className="button"
                onClick={() => {
                  deletetask(ele);
                }}
              >
                delete
              </button>
              <button
                className="button"
                onClick={() => {
                  update(ele);
                  setmodelIsopen(true);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
      <Complete
        completed={completed}
        setCompleted={setCompleted}
        completetask={completetask}
        ptask={ptask}
        setptask={setptask}
        padd={padd}
        edititem={edititem}
        setedititem={setedititem}
        modelIsopen={modelIsopen}
        setmodelIsopen={setmodelIsopen}
      />
    </>
  );
};

export default Panding;
