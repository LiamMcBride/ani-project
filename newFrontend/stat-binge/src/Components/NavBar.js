import { firstGray } from '../Colors';

const navBarStyle = {
    "width": "100%",
    "height": "50px",
    "background-color": firstGray,
}


export function NavBar() {
  return (
    <div class={"nav-bar"} style={navBarStyle}></div>
  );
}
