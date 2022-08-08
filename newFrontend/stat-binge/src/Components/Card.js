import { firstGray } from "../Colors";
import { Feed } from "./Feed";
import { Heading2 } from "./Headings";
import { HorizontalDividerLine } from "./LineDivider";

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

export function RecommendationCard(props) {


  return (
    <Card>
      <Heading2 align="left">Search</Heading2>
      <HorizontalDividerLine></HorizontalDividerLine>
      <Feed>
        
      </Feed>
    </Card>
  );
}
