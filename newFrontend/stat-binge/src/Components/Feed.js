

let feedStyle = {
    "height": "100%",
    "overflow": "scroll",
}

export function Feed(props){

    return (
        <div style={feedStyle}>
            {props.children ? props.children : null}
        </div>
    );
}