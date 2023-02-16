import { Form } from "../Form/Form";
import React from "react";

let Header = function ({ addToList }) {
  return (
    <header>
      <Form addToList={addToList} />
    </header>
  );
};

Header = React.memo(Header);

export { Header };
