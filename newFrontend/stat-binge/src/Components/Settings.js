const settingsButtonStyle = {
    "backgroundColor": "transparent",
    "height": "auto",
    "width": "auto",   
    // "alignSelf": "top",
    "margin": "auto 0 auto auto",
}
//maybe give this ability to be passed the component it opens when clicked
export function SettingsButton(props){
    return (
        <img style={settingsButtonStyle} src={require("./Settings.png")}/>
    );
}