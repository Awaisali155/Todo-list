import React, { useState } from "react";
import ReactModal from "react-modal";
import Modal from "react-modal/lib/components/Modal";
import App from "./App";
const Edit = ({
  edititem,
  setedititem,
  ptask,
  setptask,
  modelIsopen,
  setmodelIsopen,
}) =>
  //  modelIsopen={modelIsopen},
  //       setmodelIsopen={setmodelIsopen}
  {
    const id = edititem.id;

    // console.log(edititem.task, "task here");
    // console.log(edititem.id, "id here");
    // const [editTask, setEditTask] = useState({ edititem });
    const [updateitem, setupdateitem] = useState([]);

    console.log(modelIsopen);
    const newRecord = { id: id, task: updateitem };

    const handelupdatesubmit = (e) => {
      setupdateitem("");
      setptask("");
      const result = ptask.filter((elem) => {
        return elem.id !== id;
      });
      setptask(result);

      setptask((ptask) => {
        return [...ptask, newRecord];
      });
      e.preventDefault();
    };

  return (
    <div className="form">
      <Modal isOpen={modelIsopen} className="modal">
        <form action="">
          <label htmlFor="">
            <h3 style={{ textAlign: "center" }}>updateTask</h3>
          </label>
          <input className="mrg"
            type="text"
            // Value={edititem.task}
            value={updateitem.length > -1 ? updateitem : edititem.task}
            onChange={(e) => setupdateitem(e.target.value)}
          />
          <button
            onClick={() => {
              setmodelIsopen(false);
              handelupdatesubmit();
            }}
            className="btn"
            type="submit"
          >
            update
          </button>
        </form>
      </Modal>
    </div>
  );
  };

export default Edit;
