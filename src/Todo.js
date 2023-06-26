import Header from "./components/Header";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import "./Todo.css";

function Todo() {
  return (
    <div className="todo">
      <Header />
      <Form />
      <Todolist />
    </div>
  );
}

export default Todo;
