import "./selector.css";

const Selector = ({ setQuantity }) => {
  return (
    <>
      <select
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        name="select"
        className="text"
      >
        <option> 1</option>
        <option> 2</option>
        <option> 3</option>
      </select>
    </>
  );
};

export default Selector;
