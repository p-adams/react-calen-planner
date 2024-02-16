import { InputHTMLAttributes } from "react";
import "./AppCalendarInput.css";

export interface AppCalendarProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function AppCalendarInput(props: AppCalendarProps) {
  return (
    <div className="app-calendar-wrapper">
      {props.label && <label>{props.label}</label>}
      <input type="date" {...props} />
    </div>
  );
}

export default AppCalendarInput;
