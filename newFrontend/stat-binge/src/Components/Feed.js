

let feedStyle = {
    "overflow": "scroll",
    "height": "100%",
}

export function Feed(props){

    return (
        <div style={feedStyle}>
            {props.children ? props.children : null}
        </div>
    );
}