
import "./switch.css";

export function Switch(props){
    return (
        <div className="switch-wrapper">
            <label className="switch">
                <input type="checkbox" onChange={props.handleChange}/>
                <div className="slider"></div>
            </label>
        </div>
    );
}