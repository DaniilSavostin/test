import React, { useState } from "react";

let Form = function ({ addToList }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addToList(inputValue);
    setInputValue("");
  };

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="d-flex flex-column align-items-center"
    >
      <div className="mb-3">
        <input
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
          className="form-control"
          value={inputValue}
          name="onetodo"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

Form = React.memo(Form);

export { Form };
