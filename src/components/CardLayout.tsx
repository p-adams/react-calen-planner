import GridSystem from "./GridSystem";
import "./CardLayout.css";

interface CardLayoutProps {
  layoutSettings: LayoutSettings;
}

function CardLayout(props: CardLayoutProps) {
  return (
    <div className="card-layout">
      <GridSystem layoutSettings={props.layoutSettings} />
    </div>
  );
}

export default CardLayout;
