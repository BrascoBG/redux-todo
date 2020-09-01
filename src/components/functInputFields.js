import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PersonsFunct from "./PersonsFunct";
import * as actionTypes from "../store/actions";

const FunctInputFields = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const data = useSelector((state) => state.functRed.data);
  const dispatch = useDispatch();

  const demo = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.FUNCT_ADD,
      personData: { name: name, age: age },
    });
    setName("");
    setAge("");
  };

  return (
    <div>
      <h5>This is a Functional Component managed with REDUX</h5>
      <form onSubmit={demo}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <button type="submit">ADD</button>
      </form>
      <hr />
      <PersonsFunct
        clicked={(id) =>
          dispatch({
            type: actionTypes.FUNCT_DELETE,
            resId: id,
          })
        }
        change={(id) =>
          dispatch({
            type: actionTypes.FUNCT_CHECK,
            changeId: id,
          })
        }
        persons={data}
      />
    </div>
  );
};

export default FunctInputFields;
