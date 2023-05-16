import { Link } from 'react-router-dom';
import 'bootstrap'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><Link to="/" id="title">Pathway Conductor</Link></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/new-path" id="newPath">New Path</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;