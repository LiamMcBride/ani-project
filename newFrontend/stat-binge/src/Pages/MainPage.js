import { black } from "../Colors";
import { Card } from "../Components/Card";
import { FeedComment } from "../Components/Comment";
import { Feed } from "../Components/Feed";
import { Heading2 } from "../Components/Headings";
import { HorizontalDividerLine } from "../Components/LineDivider";

const mainPageStyle = {
  "backgroundColor": black,
  "display": "grid",
  "gridTemplateColumns": "1fr 1fr .5fr",
  "gridGap": "15px",
  // "width": "100%",
  "padding": "15px",
  // "height": "100vh",
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
  "comment": "Honestly mid as hell",
  "timestamp": "2 days",
}

export function MainPage() {
  return (
    <div style={mainPageStyle}>
      <Card>
      <Heading2 align="left">Currently watching</Heading2>

        <HorizontalDividerLine />
        <Feed>
          hi
        </Feed>
      </Card>
      <Card>
      <Heading2 align="left">Find your new show</Heading2>

        <HorizontalDividerLine />
        <Feed>
          hi
        </Feed>
      </Card>
      <Card>
        <Heading2 align="left">Friend feed</Heading2>
        <HorizontalDividerLine />
        <Feed>
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