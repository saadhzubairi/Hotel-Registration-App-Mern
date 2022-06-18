import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Saad's Booking!</span>
                <div className="navItems">
                    <button className="navButton">REGISTER</button>
                    <button className="navButton">LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar