const Filter = ({ filter, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" value={filter} name={filter} onChange={onChange} />
  </label>
);

export default Filter;
