import React, { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setToDo(value);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, toDo];
    });
    setToDo("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={toDo} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
