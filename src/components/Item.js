import "./Item.css";

function Item() {
  return (
    <div className="item">
      <input type="checkbox"></input>
      <p className="task">
        Task 1<span>🗑️</span>
      </p>
    </div>
  );
}

export default Item;
