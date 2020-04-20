import React from "react";
import "./TaskList.css";

const TaskList = (props) => {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="task-list" key={item.key}>
        <p>
          {item.text}
          <span>
            <i class="fa fa-trash"></i>
          </span>
        </p>
        <hr></hr>
      </div>
    );
  });
  return <div id="listbody">{listItems}</div>;
};

export default TaskList;
