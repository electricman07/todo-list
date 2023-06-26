import "./Todolist.css";
import Item from "./Item";

function Todolist() {
  return (
    <div className="todolist">
      <h2>List items</h2>
      <Item />
      <Item />
      <Item />
      <h2>Completed</h2>
    </div>
  );
}

export default Todolist;
