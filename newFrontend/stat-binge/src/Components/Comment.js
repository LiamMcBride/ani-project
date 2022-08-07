import { useState } from "react";
import { RatingCanvas } from "./CanvasElements";
import { Heading2 } from "./Headings";
import { IconImage } from "./Image";
import { SettingsButton } from "./Settings";

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
    const [score, setScore] = useState(1.35);
    const slider = <input id={"scoreSlider"} type={"range"} max={2} min={0} step={.05} onChange={() => setScore(document.getElementById("scoreSlider").value)}></input>;

    return (
        <div>
            <div style={topRowStyle}>
                <IconImage image={data?.icon}></IconImage>
                <Heading2 align="left">{data?.username}</Heading2>
                <SettingsButton></SettingsButton>
            </div>
            <RatingCanvas value={score}></RatingCanvas>
            {slider}
            <h1 style={{"color": "red"}}>{score}</h1>
        </div>
    );
}