import "./App.css";
import Modal from "./components/Modal";
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
        <h1>Index Card</h1>
        <div>
          <IndexCard />
        </div>
      </section>
      <section>
        <h1>Modal</h1>
        <div>
          <Modal
            isOpen={false}
            close={() => {}}
            dialogUI={() => (
              <div>
                <button>cancel</button>
                <button>accept</button>
              </div>
            )}
          ></Modal>
        </div>
      </section>

      <p className="read-the-docs">
        Click <a>here</a> to learn more
      </p>
    </>
  );
}

export default App;
