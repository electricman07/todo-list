import "./Form.css";

function Form() {
  return (
    <div className="form">
      <label>Enter a thing to do:</label>
      <input type="text"></input>
      <button type="submit" className="btn btn-submit">
        Submit
      </button>
    </div>
  );
}

export default Form;
