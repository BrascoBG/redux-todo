import React from "react";
import PersonsClass from "./PersonsClass";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class inputFields extends React.Component {
  state = {
    name: "",
    age: "",
  };
  nameChangeHandler = (e) => {
    this.setState({ name: e.target.value });
  };
  ageChangeHandler = (e) => {
    this.setState({ age: e.target.value });
  };
  demo = (e) => {
    e.preventDefault();
    this.setState({ name: "", age: "" });
  };
  render() {
    return (
      <div>
        <h5>This is a Class Component managed with REDUX</h5>
        <form onSubmit={this.demo}>
          <input
            type="text"
            placeholder="Name"
            onChange={this.nameChangeHandler}
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="Age"
            onChange={this.ageChangeHandler}
            value={this.state.age}
          />
          <button
            type="submit"
            onClick={() => this.props.onAdd(this.state.name, this.state.age)}
          >
            ADD
          </button>
        </form>

        <hr />
        <PersonsClass
          persons={this.props.persons}
          clicked={(id) => this.props.onDelete(id)}
          change={(id) => this.props.onChange(id)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.classRed.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (name, age) =>
      dispatch({
        type: actionTypes.ADD_PERSON,
        personData: { name: name, age: age },
      }),
    onDelete: (id) => dispatch({ type: actionTypes.DELETE_PERSON, resId: id }),
    onChange: (id) =>
      dispatch({ type: actionTypes.CHECK_PERSON, changeId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(inputFields);
