import React from "react";
let Footer = function ({ deleteAllToDo }) {
  return (
    <footer>
      <button
        onClick={() => deleteAllToDo()}
        type="button"
        className="btn btn-danger"
      >
        Delete
      </button>
    </footer>
  );
};

Footer = React.memo(Footer);

export { Footer };
