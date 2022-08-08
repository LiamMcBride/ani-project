import { green, red } from "../Colors";

const seenTagStyle = (seen) => {
    return {
        "fontSize": "15px",
        "fontWeight": "normal",
        "textAlign": "left",
        "color": seen ? green : red,
        "display": "inline",
    }
}

export function SeenTag(props){


    return (
        <h4 style={seenTagStyle(props?.seen ? props.seen : false)}>{props?.seen ? "Seen" : "Not Seen"}</h4>
    );
}