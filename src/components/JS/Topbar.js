import { Link } from "react-router-dom";
import logo from '../images/logo.png';


function Topbar() {
  return (
    <div className="topbar">
      <img src={logo} alt="Logo" width="50" height="50" />
      <div className="menu">
        <Link className='topbarTitle' to="/">Home</Link>
        <Link className='topbarTitle' to="/about">About Me</Link>
        <Link className='topbarTitle' to="/certifications">Certifications</Link>
      </div>
    </div>
  );
}

export default Topbar;