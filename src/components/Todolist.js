import "./Todolist.css";
import Item from "./Item";

function Todolist({ items, onDeleteItem, onToggleItems }) {
  return (
    <div className="todolist">
      <h2>List items</h2>
      <ul className="listItems">
        {items.map((item, i) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
