import { firstGray, purple, secondGray, textColor } from "../Colors";


const buttonStyle = {
    "borderRadius": "5px",
    "padding": "10px",
    "border": "none",
    "boxShadow": "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    "height": "50px",
    "backgroundColor": secondGray,
}

const buttonGroupStyle = {
    "margin": "15px 0",
    "display": "grid",
    "gridTemplateColumns": "1fr 1fr",
    "width": "100%",
    "gridGap": "25px",
}

const emojiButtonStyle = {
    "height": "30px",
    "width": "30px",
    "backgroundColor": "transparent",
    "border": "none",
    "textAlign": "center",
    "alignItems": "center",
    "float": "left",
    // "backgroundImage": require("./Emoji.png"),
}

const reactionButtonStyle = {
    "height": "25px",
    "width": "40px",
    "backgroundColor": purple,
    "border": "none",
    "textAlign": "center",
    "alignItems": "center",
    "float": "left",
    "lineHeight": "25px",
    "borderRadius": "5px",
    "boxShadow": `inset 1px 1px 1px 1px ${firstGray}`,
    "margin": "0 10px",
}




export function Button(props){
    const style = {"backgroundColor": secondGray}
    return (
        <button onclick={console.log("hi")}>
            <h4>{props.children}</h4>
        </button>
    );
}

export function ButtonGroup(props){

    return (
        <div style={buttonGroupStyle}>
            {props.children}
        </div>
    );
}

export function EmojiButton(props){
    return (
        <button style={emojiButtonStyle}>
            <img  src={require("./Emoji.png")}></img>
        </button>
    );
}

export function ReactionButton(props){
    return (
        <div style={reactionButtonStyle}>
            👍4
        </div>
    );
}

export function ReplyButton(props){
    const style = {
        "color": textColor,
        "fontSize": "15px",
        "display": "inline",
        "margin": "0 10px",
    }

    return (
        <p style={style}>Reply</p>
    );
}