import React from "react";

const PersonsFunct = (props) => {
  return (
    <div>
      {props.persons.map((person) => (
        <div
          key={person.id}
          className="persons"
          style={{ background: person.completed ? "gray" : "" }}
        >
          <label htmlFor="check">{person.completed ? "Unmark" : "Mark"}</label>
          <input
            id="check"
            type="checkbox"
            onChange={() => props.change(person.id)}
          />
          <br />
          <button onClick={() => props.clicked(person.id)}>Delete</button>
          <h1>{person.name}</h1>
          <h3>{person.age}</h3>
        </div>
      ))}
    </div>
  );
};

export default PersonsFunct;
