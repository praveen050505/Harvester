
import './index.css'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ()=>{
    return (
        <nav className="navbar">
            <GiHamburgerMenu className="nav-icon"/>
            <p className="nav-para">Sri Venkateshwara Harvesters</p>
            <img src="./navbar.jpg" className="navbar-image" alt="nav-image"/>
        </nav>
    )
}

export default Navbar