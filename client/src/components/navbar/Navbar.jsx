import "./navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
                    <span className="logo">HALPERT'S BOOKING</span>
                </Link>
                <div className="navItems">
                    <button className="navButton">REGISTER</button>
                    <button className="navButton">LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar