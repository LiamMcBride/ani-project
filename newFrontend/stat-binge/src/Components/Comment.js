import { Heading2 } from "./Headings";
import { IconImage } from "./Image";

const feedCommentStyle = {

}

const topRowStyle = {
    "display": "grid",
    "gridTemplateColumns": "50px 1fr 50px",
}

export function FeedComment(props){
    const data = props.data;

    return (
        <div>
            <div style={topRowStyle}>
                <IconImage image={data?.icon}></IconImage>
                <Heading2 align="left">{data?.username}</Heading2>
                <div style={{"backgroundColor": "white", "height": "50px", "width": "50px"}}></div>
            </div>
        </div>
    );
}