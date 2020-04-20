import React from "react";

class InitialPage extends React.Component {
  render() {
    return (
      <>
        <header>
          <form id="to-do-form">
            <input type="text" placeholder="Enter Text" />
            <button type="submit">ADD</button>
          </form>
        </header>
      </>
    );
  }
}

export default InitialPage;
