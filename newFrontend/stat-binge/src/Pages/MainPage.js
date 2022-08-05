import { black } from "../Colors";
import { Card } from "../Components/Card";
import { Heading2 } from "../Components/Headings";

const mainPageStyle = {
  "background-color": black,
  "padding": "20px",
}

export function MainPage() {
  return (
    <div style={mainPageStyle}>
        <Card />
        <Heading2 text="Hello World" />
    </div>
  );
}