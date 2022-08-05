

let feedStyle = {
    "overflow": "scroll",
}

export function Feed(height="100%"){

    feedStyle["height"] = height;

    return (
        <div style={feedStyle}></div>
    );
}