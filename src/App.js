import React, { Component } from "react";
import InputFields from "./components/inputFields";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Something like ToDo List</h1>
        <h3>(Redux with Class Components)</h3>
        <InputFields />
      </div>
    );
  }
}

export default App;
