import { secondGray, textColor } from "../Colors";

const commentTextStyle = {
    "padding": "0",
    "margin": "0",
    "color": textColor,
    "textAlign": "left",
    "fontSize": "17px",
}

export function CommentText(props){
    const blurryDivStyle = {
        
            "height": "100%",
            "width": "100%",
            "backgroundColor": "rgba(108, 108, 108, 1)",
            "position": "absolute",
            "top": "0",
            "left": "0",
            "filter": "blur(3px)",
            // "display": props.hide ? "block" : "none",
        
    }

    const buttonStyle = {
        "zIndex": "1",
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "transform": "translate(-25%, -25%)",
        "display": props.hide ? "block" : "none",
    }

    return (
        <div style={{"position": "relative"}}>
            <p style={commentTextStyle}>{props.children}</p>
            {props.hide ? <div style={blurryDivStyle}></div> : null}
            {props.hide ? <button style={buttonStyle} onClick={props.handleClick}>View</button> : null}
        </div>
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