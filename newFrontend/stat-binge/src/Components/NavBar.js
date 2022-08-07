import { firstGray } from '../Colors';

const navBarStyle = {
    "width": "100%",
    "height": "50px",
    "backgroundColor": firstGray,
}


export function NavBar() {
  return (
    <div className={"nav-bar"} style={navBarStyle}></div>
  );
}
