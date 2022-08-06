

let feedStyle = {
    "overflow": "scroll",
}

export function Feed(props){

    feedStyle["height"] = "100%";

    return (
        <div style={feedStyle}>
            {props.children}
        </div>
    );
}