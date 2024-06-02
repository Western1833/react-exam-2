import { useContext } from 'react';
import '../navigation/nav-styles.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext.js';

const Navigation = () => {
    const { isAuthenticated, email } = useContext(AuthContext);
    console.log(email)
    console.log(isAuthenticated)

    return (
        <header className="site-section site-header">
            <div className="site-logo">
                <Link to="/">
                    <img src="/remade-logo-2.png" alt="Logo" />
                </Link>
                <Link to="/"><span>CarSales</span></Link>
            </div>
            <nav>
                {
                    isAuthenticated && (
                        <ul>
                            <li><span>User: {email}</span></li>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/add-car'>Add car</Link></li>
                            <li><a>My cars</a></li>
                            <li><a>Logout</a></li>
                        </ul>

                    )
                }

                {
                    !isAuthenticated && (
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/all-cars'>Catalog</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><a>Register</a></li>
                        </ul>
                    )
                }
            </nav>
        </header>
    );
};

export default Navigation;