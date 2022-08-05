import { firstGray } from "../Colors";

const cardStyle = {
    "background-color": firstGray,
    "min-height": "35px",
    "max-height": "200px",
    "border-radius": "5px",
    "padding": "20px",
}


export function Card(maxSize=null) {
  return (
    <div class={"nav-bar"} style={cardStyle}></div>
  );
}
