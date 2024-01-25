import React from "react";

function Coreconcept({ ...concept }) {
  return (
    <li>
      <img src={concept.image} />
      <h3>{concept.title}</h3>
      <p>{concept.description}</p>
    </li>
  );
}
// function Coreconcept({ image, title, description }) {
//   return (
//     <li>
//       <img src={image} alt={image} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }
export default Coreconcept;
