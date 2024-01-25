import Coreconcept from "./components/Coreconcept.jsx";
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  function handleClick(selectBtn) {
    console.log(selectBtn);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <Coreconcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <Coreconcept {...CORE_CONCEPTS[1]} />
            <Coreconcept {...CORE_CONCEPTS[2]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton onSelect={() => handleClick("state")}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
