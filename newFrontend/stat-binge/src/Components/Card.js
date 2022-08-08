import { firstGray } from "../Colors";

const cardStyle = {
    "backgroundColor": firstGray,
    "minHeight": "35px",
    "maxHeight": "85vh",
    "borderRadius": "2px",
    "padding": "20px",
    "overflow": "hidden",
    // "margin": "10px",
}


export function Card(props) {
  return (
    <div className={"nav-bar"} style={cardStyle}>
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
