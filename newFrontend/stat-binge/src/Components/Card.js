import { firstGray } from "../Colors";
import { Feed } from "./Feed";
import { Heading2 } from "./Headings";
import { HorizontalDividerLine } from "./LineDivider";
import { Switch } from "./Toggle";

const cardStyle =(height) => {
    return {
      "backgroundColor": firstGray,
      "minHeight": "35px",
      "maxHeight": "85vh",
      "borderRadius": "2px",
      "padding": "20px",
      "overflow": "hidden",
      "height": height ? height : "none",
    }
    // "margin": "10px",
}


export function Card(props) {
  return (
    <div className={"nav-bar"} style={cardStyle(props?.height)}>
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

export function SearchCard(props){

  const innerValue = () => {
    if(props.advancedSearch){
      return (
        <Feed className="search-feed">
          advanced
        </Feed>
      );
    }
    return (
      <Feed className="search-feed">
        lame
      </Feed>
    );
  }

  return (
    <Card height={"20vh"}>
      <div style={{"position": "relative", "textAlign": "left"}}>
        <Heading2 display="inline-block" align="left">{props.advancedSearch ? "Advanced Search" : "Search"}</Heading2>
        <Switch right={true} handleChange={props.handleChange}></Switch>
      </div>
      <HorizontalDividerLine></HorizontalDividerLine>
      {innerValue()}
    </Card>
  );
}
