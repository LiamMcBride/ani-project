import { useState } from "react";
import { black } from "../Colors";
import { Card, RecommendationCard, SearchCard } from "../Components/Card";
import { FeedComment } from "../Components/Comment";
import { Feed } from "../Components/Feed";
import { Heading2 } from "../Components/Headings";
import { HorizontalDividerLine } from "../Components/LineDivider";

const mainPageStyle = {
  "backgroundColor": black,
  "display": "grid",
  "gridTemplateColumns": ".5fr 1fr .5fr",
  "gridTemplateRows": "1fr 1fr",
  "gridArea": "current-feed search-feed friend-feed\ncurrent-feed recommendation-feed friend-feed",
  "gridGap": "15px",
  // "width": "100%",
  "padding": "15px",
  "height": "100vh",
}

const testComment = {
  "username": "DBauc",
  "icon":"./realavatar.jpg",
  "rating": 8,
  "episode": "S2 Ep3",
  "seen": true,
  "comment": "Really enjoyed this one! Don’t know why they be spending literal hours on backgrounds...",
  "timestamp": "6 hours",
}

const testComment2 = {
  "username": "WHager",
  "icon":"./realavatar.jpg",
  "rating": 3,
  "episode": "S5 Ep1",
  "seen": false,
  "comment": "Honestly mid as hellHonestly mid as hellHonestly mid as hellHonestly mid as hellHonestly mid as hellHonestly mid as hellHonestly mid as hellHonestly mid as hellHonestly mid as hellHonestly mid as hellHonestly mid as hellHonestly mid as hellHonestly mid as hellHonestly mid as hell",
  "timestamp": "2 days",
}

export function MainPage() {

  const [advancedSearch, setAdvancedSearch] = useState(false);

  const handleAdvancedSearch = () => {
    setAdvancedSearch(!advancedSearch);
    console.log(advancedSearch)
  }

  return (
    <div style={mainPageStyle}>
      <Card>
      <Heading2 align="left">Currently watching</Heading2>

        <HorizontalDividerLine />
        <Feed className={"current-feed"}>
          hi
        </Feed>
      </Card>
      <div>
      <SearchCard advancedSearch={advancedSearch} handleChange={handleAdvancedSearch}></SearchCard>
      <div style={{"height": "15px", "width": "10px"}}></div>
      <RecommendationCard></RecommendationCard>
      </div>
      {/* {advancedSearch ? <RecommendationCard></RecommendationCard> : null} */}
      <Card>
        <Heading2 align="left">Friend feed</Heading2>
        <HorizontalDividerLine />
        <Feed className={"friend-feed"}>
          <FeedComment data={testComment}></FeedComment>
          <HorizontalDividerLine></HorizontalDividerLine>
          <FeedComment data={testComment2}></FeedComment>
          <HorizontalDividerLine></HorizontalDividerLine>
          <FeedComment data={testComment2}></FeedComment>
          <HorizontalDividerLine></HorizontalDividerLine>
          <FeedComment data={testComment2}></FeedComment>
          <HorizontalDividerLine></HorizontalDividerLine>
          <FeedComment data={testComment2}></FeedComment>
          <HorizontalDividerLine></HorizontalDividerLine>
          <FeedComment data={testComment2}></FeedComment>
        </Feed>
      </Card>
    </div>
  );
}