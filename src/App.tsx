import "./App.css";
import GridSystemExample from "./examples/GridSystem";
import IndexCard from "./examples/IndexCard";

function App() {
  return (
    <>
      <section>
        <h1>Index Card</h1>
        <div>
          <IndexCard />
        </div>
      </section>
      <section>
        <h1>Grid System</h1>
        <div>
          <GridSystemExample />
        </div>
      </section>

      <p className="read-the-docs">
        Click <a>here</a> to learn more
      </p>
    </>
  );
}

export default App;
