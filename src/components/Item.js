import "./Item.css";

function Item() {
  return (
    <div className="item">
      <input type="checkbox"></input>
      <p className="task">Task 1</p>
      <span>&times;</span>
    </div>
  );
}

export default Item;
