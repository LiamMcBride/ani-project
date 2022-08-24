
import "./switch.css";

export function Switch(props){
    const wrapperStyle = {
        "display": "inline",
        "position": props?.right ? "absolute" : "static",
        "top": props?.right ? "25%" : null,
        "right": props?.right ? "0px" : null,
    }
    return (
        <div style={wrapperStyle}>
            <label className="switch">
                <input type="checkbox" onChange={props.handleChange}/>
                <div className="slider"></div>
            </label>
        </div>
    );
}