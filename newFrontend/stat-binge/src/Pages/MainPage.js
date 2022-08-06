import { black } from "../Colors";
import { Button, ButtonGroup } from "../Components/Button";
import { Card } from "../Components/Card";
import { Feed } from "../Components/Feed";
import { Heading2 } from "../Components/Headings";

const mainPageStyle = {
  "background-color": black,
  "padding": "20px",
  "height": "100vh",
}

export function MainPage() {
  return (
    <div style={mainPageStyle}>
        <Feed>
            <button></button>
            <Button>Test</Button>
          <Card>
            <ButtonGroup>
              <Button>Submit</Button>
              <Button>Cancel</Button>
            </ButtonGroup>
          </Card>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Feed>
        <Heading2 text="Hello World" />
    </div>
  );
}