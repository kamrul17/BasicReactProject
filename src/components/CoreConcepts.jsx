import React from "react";
import Coreconcept from "./Coreconcept";
import { CORE_CONCEPTS } from "../data.js";
function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {/* <Coreconcept
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
      />
      <Coreconcept {...CORE_CONCEPTS[1]} />
      <Coreconcept {...CORE_CONCEPTS[2]} /> */}
        {/* better way to output list dynamically by using map */}
        {CORE_CONCEPTS.map((conceptItems) => (
          <Coreconcept key={conceptItems.title} {...conceptItems} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
