import React from "react";
import Edit from "./Edit";
import App from "./App";
const Complete = ({
  completed = { completed },
  setCompleted = { setCompleted },
  completetask = { completetask },
  ptask = { ptask },
  setptask = { setptask },
  padd = { padd },
  modelIsopen = { modelIsopen },
  setmodelIsopen = { setmodelIsopen },
  edititem = { edititem },
  setedititem = { setedititem },
}) => {
  // ......................return to pending
  const returntoptask = (item) => {
    setptask([...ptask, item]);
    const result = completed.filter((i) => {
      return item.id != i.id;
    });

    setCompleted(result);
  };
  return (
    <>
      <h1 className="header">complete task</h1>
      {completed.map((ele) => {
        return (
          <div>
            <h1>{ele.task}</h1>
            <button
              className="buttonn"
              onClick={() => {
                returntoptask(ele);
              }}
            >
              move to panding
            </button>
          </div>
        );
      })}
      <Edit
        ptask={ptask}
        setptask={setptask}
        edititem={edititem}
        setedititem={setedititem}
        modelIsopen={modelIsopen}
        setmodelIsopen={setmodelIsopen}
      />
    </>
  );
};

export default Complete;
