import '../styles/Navbar.css'
import logo from "../assets/Logo.png"

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-content">
                <a href="#" class="logo"><img src={logo}/></a>
                <ul>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">PORTFOLIO</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;