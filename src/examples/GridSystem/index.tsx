import GridSystem from "../../components/GridSystem";
import "./index.css";
interface GridSystemProps {}

function GridSystemExample(props: GridSystemProps) {
  return (
    <div className="grid-system">
      <GridSystem layoutSettings={{}} />
    </div>
  );
}

export default GridSystemExample;
