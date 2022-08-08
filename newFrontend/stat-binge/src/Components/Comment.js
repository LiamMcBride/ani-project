import { purple, secondGray } from "../Colors";
import { RatingCanvas } from "./CanvasElements";
import { Heading2, Heading3 } from "./Headings";
import { IconImage } from "./Image";
import { SettingsButton } from "./Settings";
import { SeenTag } from "./SpecialText";

const feedCommentStyle = {

}

const topRowStyle = {
    "display": "grid",
    "gridTemplateColumns": "50px 1fr 50px",
}

const testDivStyle = {
    "marginLeft": "0px",
    "float": "left",
    // "backgroundColor": "red",
    "height": "auto",
    "width": "60px",
}

export function FeedComment(props){
    const data = props.data;
    const score = data.rating;

    return (
        <div>
            <div style={topRowStyle}>
                <IconImage image={data?.icon}></IconImage>
                <Heading2 align="left">{data?.username}</Heading2>
                <SettingsButton></SettingsButton>
            </div>
            <div style={{"margin": "10px 0 0 0"}}>
                <RatingCanvas value={score / 5}></RatingCanvas>
                <Heading3 align={"left"} color={purple}>{score + "/10"}</Heading3>
            </div>
            <div style={{"textAlign": "left", "margin": "0", "color": secondGray}}>
                <h4 syle={{"display": "inline", "fontSize": "15px", "fontWeight": "normal", "textAlign": "left",}}>Commented on S1 Ep3 | <SeenTag seen={data.seen}></SeenTag></h4>
            </div>
        </div>
    );
}