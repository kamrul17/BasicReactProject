import React from "react";
// using props children or you can also use regular props attributes

function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

export default TabButton;
