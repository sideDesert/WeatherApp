import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/' className={({isActive})=> isActive?'active':'inactive'}>Home</NavLink></li>
                <li><NavLink to='/about' className={({isActive})=> isActive?'active':'inactive'}>About</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;