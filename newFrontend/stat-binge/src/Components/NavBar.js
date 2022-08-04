import { firstGray } from '../Colors';
import './ComponentStyles/NavBar.css';

const navBarStyle = {
    "width": "100%",
    "height": "50px",
    "background-color": firstGray,
}


export function NavBar() {
  return (
    <div class={"nav-bar"} style={navBarStyle}>
        {/* <img class={"logo-image"} src={"Assets/clear_logo.svg"}></img> */}
        {/* <h1 style={"margin-left: 10px; color: purple; display: inline-block"}>Stat Binge</h1> */}
    </div>
  );
}
