import { purple, secondGray } from "../Colors";
import { EmojiButton, ReactionButton, ReplyButton } from "./Button";
import { RatingCanvas } from "./CanvasElements";
import { Heading2, Heading3 } from "./Headings";
import { IconImage } from "./Image";
import { SettingsButton } from "./Settings";
import { SeenTag } from "./SpecialText";
import { CommentText, TimeStamp } from "./Text";

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
        <div stlye={{"margin": "10px 0"}}>
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
                <h4 syle={{"display": "inline", "fontSize": "15px", "fontWeight": "normal", "textAlign": "left",}}>Commented on {data.episode} | <SeenTag seen={data.seen}></SeenTag></h4>
            </div>
            <CommentText>{data.comment}</CommentText>
            <div style={{"margin": "10px 0", "textAlign": "left", "color": secondGray}}>
                <EmojiButton></EmojiButton>
                <ReactionButton></ReactionButton>
                |
                <ReplyButton></ReplyButton>
                |
                <TimeStamp>{data.TimeStamp}</TimeStamp>
            </div>
        </div>
    );
}