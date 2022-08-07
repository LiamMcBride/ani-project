import { secondGray } from "../Colors";


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