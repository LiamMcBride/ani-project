import { black } from "../Colors";
import { Card } from "../Components/Card";
import { FeedComment } from "../Components/Comment";
import { Feed } from "../Components/Feed";
import { Heading2 } from "../Components/Headings";
import { HorizontalDividerLine } from "../Components/LineDivider";

const mainPageStyle = {
  "backgroundColor": black,
  "display": "grid",
  "gridTemplateColumns": "1fr 1fr 1fr",
  "gridGap": "15px",
  // "width": "100%",
  "padding": "15px",
  // "height": "100vh",
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
          <FeedComment data={{"username": "DBauc", "icon":"./realavatar.jpg", "rating": 8, "seen": true,}}></FeedComment>
        </Feed>
      </Card>
    </div>
  );
}