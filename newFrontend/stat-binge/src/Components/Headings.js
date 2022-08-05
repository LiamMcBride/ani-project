import { textColor } from "../Colors";

const heading2Style = {
    "color": textColor,
    "margin": "5px 0",
    "padding": "0",
    "font-size": "20px",
    "font-weight": "bolder",
}

export function Heading2(){
    console.log(this.props)
    return(
        <h1 style={heading2Style}>{this.props.text}</h1>
    );
}