

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

export function SideFeed(props){
    const style = {
        "height": "225px",
        "whiteSpace": "nowrap",
        "overflow-y": "hidden",
        "overflow-x": "auto",
        "width": "675px",
    }

    return (
        <div style={style}>
            {props?.children}
        </div>
    );
}