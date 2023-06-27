import "./Item.css";

function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <div className="item">
      <input
        type="checkbox"
        value={item.checked}
        onChange={() => {
          onToggleItems(item.id);
        }}
      ></input>
      <p
        className="task"
        style={item.checked ? { textDecoration: "line-through" } : {}}
      >
        {item.item}
      </p>
      <button onClick={() => onDeleteItem(item.id)}>🗑️</button>
    </div>
  );
}

export default Item;
