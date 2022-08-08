import { secondGray, textColor } from "../Colors";

const commentTextStyle = {
    "padding": "0",
    "margin": "0",
    "color": textColor,
    "textAlign": "left",
    "fontSize": "17px",
}

export function CommentText(props){
    return (
        <p style={commentTextStyle}>{props.children}</p>
    );
}

export function TimeStamp(props){
    const style = {
        "color": secondGray,
        "fontSize": "15px",
        "margin": "0 10px",
        "display": "inline",
    }

    return (
        <p style={style}>{props.children}</p>
    );
}