import { textColor } from "../Colors";

let heading2Style = (align = "center", display = "block") => {
    return {
        "color": textColor,
        "margin": "auto 5px",
        "padding": "0",
        "fontSize": "20px",
        "fontWeight": "bolder",
        "textAlign": align,
        "display": display,
    }
}

export function Heading2(props){
    return(
        <h1 style={heading2Style(props?.align, props?.display)}>{props.children}</h1>
    );
}

let heading3Style = (align = "center", color) => {
    return {
        "color": color,
        "margin": "auto 5px",
        "padding": "0",
        "fontSize": "20px",
        "fontWeight": "bold",
        "textAlign": align,
    }
}

export function Heading3(props){
    return(
        <h2 style={props.align ? heading3Style(props.align, props.color) : heading3Style("center", props.color)}>{props.children}</h2>
    );
}