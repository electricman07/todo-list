import Header from "./components/Header";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import "./Todo.css";
import { useState } from "react";

function Todo() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  return (
    <div className="todo">
      <Header />
      <Form onAddItems={handleAddItems} items={items} setItems={setItems} />
      <Todolist
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
      />
    </div>
  );
}

export default Todo;
