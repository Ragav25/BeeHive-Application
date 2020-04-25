import React from "react";
import "./TaskStyle.css";
import TaskList from "../TaskLists/TaskList";

class AddingTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
        editOption: false,
      },
    };

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }

  editItem = (key) => {
    const selectedItemIndex = this.state.items.findIndex(
      (item) => item.key === key
    );
    var allItems = this.state.items;

    allItems[selectedItemIndex].editOption = true;

    this.setState({ items: allItems });
  };

  handleUpdate = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };

  closeEdit = (key) => {
    const closingSelectedItem = this.state.items.findIndex(
      (item) => item.key === key
    );

    let allItems = this.state.items;
    allItems[closingSelectedItem].editOption = false;
    this.setState({ items: allItems });
  };

  render() {
    return (
      <div className="task-fields">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Add Task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">ADD</button>
          </form>
        </header>

        <TaskList
          items={this.state.items}
          deleteItem={this.deleteItem}
          editOption={this.state.items.editOption}
          editItem={this.editItem}
          closeEdit={this.closeEdit}
          handleUpdate={this.handleUpdate}
        ></TaskList>
      </div>
    );
  }
}

export default AddingTask;
