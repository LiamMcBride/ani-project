

let feedStyle = {
    "height": "100%",
    "overflow": "scroll",
    // "paddingBottom": "50px",
}

export function Feed(props){

    return (
        <div style={feedStyle}>
            {props.children ? props.children : null}
            <div style={{"width": "2px", "height": "100px"}}></div>
        </div>
    );
}