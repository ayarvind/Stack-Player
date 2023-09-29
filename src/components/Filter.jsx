import React,{useState} from "react";

function Filter() {
    const [value,setValue] = useState('');
  const handleChange = (e) => {
            setValue(e.target.value)
  };
  return (
    <div className="filter">
      <input
        type="search"
        placeholder="Search from list.."
        value = {value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
