import React from "react";

const GroceryItem = (props) => {
  return props.stuffs.map((item, index) => (
    <div key={index}>
      <li key={index}> {item} </li>
    </div>
  ));
};

export default GroceryItem;
