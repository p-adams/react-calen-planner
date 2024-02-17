import { useState } from "react";
import "./App.css";
import AppCalendarInput from "./components/AppCalendarInput";

function App() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <>
      <AppCalendarInput
        label="Select date:"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <p className="read-the-docs">
        Click <a>here</a> to learn more
      </p>
    </>
  );
}

export default App;
