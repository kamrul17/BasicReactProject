import React from "react";
import ReactImg from "../assets/react-core-concepts.png";
const reactDesc = ["Fundamental", "Crucial", "Core"];
function getRandom() {
  return Math.floor(Math.random() * (2 + 1));
}
function Header() {
  const description = reactDesc[getRandom()];
  return (
    <div>
      <header>
        <img src={ReactImg} alt={ReactImg} />
        {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default Header;
