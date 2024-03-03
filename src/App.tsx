import "./App.css";
import Modal from "./components/Modal";
import GridSystemExample from "./examples/GridSystem";
import IndexCard from "./examples/IndexCard";
import ModalExample from "./examples/Modal";

function App() {
  return (
    <>
      <section>
        <h1>Grid System</h1>
        <div>
          <GridSystemExample />
        </div>
      </section>
      <section>
        <h1>Index Card</h1>
        <div>
          <IndexCard />
        </div>
      </section>
      <section>
        <h1>Modal</h1>
        <div>
          <ModalExample />
        </div>
      </section>

      <p className="read-the-docs">
        Click <a>here</a> to learn more
      </p>
    </>
  );
}

export default App;
