import React from "react";
import "./TaskList.css";
import TextareaAutosize from "react-textarea-autosize";

const TaskList = (props) => {
  const items = props.items;
  const listItems = items.map((item) => {
    console.log("testing");
    return (
      <>
        <div className="task-list" key={item.key}>
          <div
            className="input-area"
            id={
              item.editOption ? "during-edit-input-area" : "input-area-buttons"
            }
          >
            <ul className="header-icons">
              <li>
                <i class="fa fa-check" id="check"></i>
              </li>
              <li id="close-edit-icons">
                <i
                  class="fa fa-edit"
                  onClick={() => props.editItem(item.key)}
                  id={item.editOption ? "hiding-icon" : "showing-icon"}
                ></i>

                <i
                  class="fa fa-window-close-o"
                  onClick={() => props.closeEdit(item.key)}
                  id={item.editOption ? "showing-icon" : "hiding-icon"}
                ></i>
              </li>
              <li>
                <i
                  className="fa fa-trash"
                  id="trash"
                  onClick={() => props.deleteItem(item.key)}
                ></i>
              </li>
            </ul>

            <TextareaAutosize
              minrows={25}
              type="text"
              className="textarea-auto"
              id={item.key}
              value={item.text}
              disabled={item.editOption ? "" : "disabled"}
              onChange={(e) => props.handleUpdate(e.target.value, item.key)}
            />
          </div>
        </div>
      </>
    );
  });
  return <div key={items.key}>{listItems}</div>;
};

export default TaskList;
