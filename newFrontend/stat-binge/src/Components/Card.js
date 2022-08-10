import { firstGray, textColor } from "../Colors";
import { Feed, SideFeed } from "./Feed";
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
  const testStyle = {
    "height": "175px",
    "width": "100px",
    "backgroundColor": "red",
    "margin": "0 20px",
    "display": "inline-block",
  }

  return (
    <Card height={"60vh"}>
      <div style={{"position": "relative", "textAlign": "left"}}>
        <Heading2 display="inline-block" align="left">Recommendations</Heading2>
        <Switch right={true} handleChange={props.handleChange}></Switch>
      </div>
      <HorizontalDividerLine></HorizontalDividerLine>
      <Feed className="search-feed">
        <h3 style={{"margin": "0", "color": textColor, "margin-bottom": "15px"}} align="left">Developers Picks</h3>
          <SideFeed>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
          </SideFeed>
        <h3 style={{"margin": "0", "color": textColor, "margin-bottom": "15px"}} align="left">Based on Your Favorites</h3>
          <SideFeed>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
          </SideFeed>
        <h3 style={{"margin": "0", "color": textColor, "margin-bottom": "15px"}} align="left">Up and Comers</h3>
          <SideFeed>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
          </SideFeed>
        <h3 style={{"margin": "0", "color": textColor, "margin-bottom": "15px"}} align="left">Top 2022 Shows</h3>
          <SideFeed>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
          </SideFeed>
        <h3 style={{"margin": "0", "color": textColor, "margin-bottom": "15px"}} align="left">Top Ranked Shows</h3>
          <SideFeed>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
            <div style={testStyle}></div>
          </SideFeed>
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
