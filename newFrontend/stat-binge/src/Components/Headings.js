import { textColor } from "../Colors";

let heading2Style = (align = "center") => {
    return {
        "color": textColor,
        "margin": "auto 5px",
        "padding": "0",
        "fontSize": "20px",
        "fontWeight": "bolder",
        "textAlign": align,
    }
}

export function Heading2(props){
    return(
        <h1 style={props.align ? heading2Style(props.align) : heading2Style()}>{props.children}</h1>
    );
}