import { firstGray } from "../Colors";

const cardStyle = {
    "background-color": firstGray,
    "min-height": "35px",
    "max-height": "200px",
    "border-radius": "5px",
    "padding": "20px",
    "margin": "10px",
}


export function Card(props) {
  return (
    <div class={"nav-bar"} style={cardStyle}>
      {props.children}
    </div>
  );
}

export function ShowCard(props){
  return (
    <Card>
      {props.children}
    </Card>
  );
}
