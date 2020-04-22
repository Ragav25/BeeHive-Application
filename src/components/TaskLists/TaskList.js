import React from "react";
import "./TaskList.css";

const TaskList = (props) => {
  const items = props.items;
  const listItems = items.map((item) => {
    console.log("testing");
    return (
      <>
        <div className="task-list" key={item.key}>
          <p className={item.editOption ? "during-edit" : "before-edit"}>
            <textarea
              type="text"
              id={item.key}
              value={item.text}
              disabled={item.editOption ? "" : "disabled"}
              onChange={(e) => props.handleUpdate(e.target.value, item.key)}
            />
            <span>
              <i
                className="fa fa-pencil-square-o"
                onClick={() => props.editItem(item.key)}
                id={item.editOption ? "hide-icon" : "show-icon"}
              ></i>

              <i
                className="fa fa-window-close"
                onClick={() => props.closeEdit(item.key)}
                id={item.editOption ? "show-icon" : "hide-icon"}
              ></i>
              <i
                className="fa fa-trash"
                id="trash"
                onClick={() => props.deleteItem(item.key)}
              ></i>
            </span>
          </p>
        </div>
      </>
    );
  });
  return <div key={items.key}>{listItems}</div>;
};

export default TaskList;
