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