import React from "react";
// using props children or you can also use regular props attributes
// isselect is for dynamic styling button
function TabButton({ children, onSelect, isselect }) {
  return (
    <li>
      <button className={isselect ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
