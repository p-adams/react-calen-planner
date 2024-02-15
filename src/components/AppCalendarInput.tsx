import "./AppCalendarInput.css";

export interface AppCalendarProps {
  label?: string;
}

function AppCalendarInput(props: AppCalendarProps) {
  return (
    <div className="app-calendar-wrapper">
      {props.label && <label>{props.label}</label>}
      <input type="date" />
    </div>
  );
}

export default AppCalendarInput;
