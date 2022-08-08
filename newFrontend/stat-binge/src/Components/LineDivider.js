import { secondGray } from "../Colors";

const horizontalDividerLineStyle = {
    "backgroundColor": secondGray,
    "width": "100%",
    "height": "2px",
    "margin": "20px 0px",
}


export function HorizontalDividerLine(props){
    return (
        <div style={horizontalDividerLineStyle}></div>
    );
}

const verticalDividerLineStyle = {
    "backgroundColor": secondGray,
    "height": "100%",
    "width": "2px",
    "margin": "0px 20px",
}


export function VerticalDividerLine(props){
    return (
        <div style={verticalDividerLineStyle}></div>
    );
}