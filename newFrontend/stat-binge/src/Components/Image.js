const iconImageStyle = {
    "width": "50px",
    "height": "50px",
    "borderRadius": "3px",
}

export function IconImage(props){
    const image = props.image;

    return (
        <img style={iconImageStyle} src={require("./realavatar.jpg")}/>
    );
}