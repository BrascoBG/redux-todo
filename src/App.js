import React, { Component } from "react";
import ClassInputFields from "./components/classInputFields";
import FunctInputFields from "./components/functInputFields";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Something like ToDo List</h1>
        <h3>(Redux Exercises)</h3>
        <div className="flex">
          <ClassInputFields />
          <FunctInputFields />
        </div>
      </div>
    );
  }
}

export default App;
