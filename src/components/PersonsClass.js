import React from "react";

const Persons = (props) => {
  return (
    <div>
      {props.persons.map((person) => (
        <div
          key={person.id}
          className="persons"
          style={{ background: person.completed ? "gray" : "" }}
        >
          <label htmlFor="mark">{person.completed ? "Unmark" : "Mark"}</label>
          <input
            id="mark"
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

export default Persons;
