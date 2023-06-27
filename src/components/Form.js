import "./Form.css";
import { useState } from "react";

function Form({ onAddItems, items }) {
  const [newItem, setNewItem] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!newItem) return;

    const newItems = { item: newItem, checked: false, id: Date.now() };

    onAddItems(newItems);

    setNewItem("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Enter a thing to do:</label>
      <input
        type="text"
        placeholder="Enter new task..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" className="btn btn-submit">
        Add
      </button>
    </form>
  );
}

export default Form;
