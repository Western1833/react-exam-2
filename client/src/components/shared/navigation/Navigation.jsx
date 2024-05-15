import '../navigation/nav-styles.css';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <header class="site-section site-header">
            <div class="site-logo">
                <Link to="/">
                    <img src="remade-logo-2.png" alt="Logo" />
                </Link>
                <Link to="/"><span>CarSales</span></Link>
            </div>
            <nav>
                <ul>
                    {/* <li *ngIf="userDataInStorage"><span>Hello, {{userDataInStorage.username}}</span></li>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/data/catalog">Catalog</a></li>
            <!-- logged in users -->
            <li *ngIf="userDataInStorage"><a routerLink="/data/add-car">Add car</a></li>
            <li *ngIf="userDataInStorage"><a routerLink="/data/my-cars">My cars</a></li>
            <li *ngIf="userDataInStorage"><a (click)="logout()" routerLink="/logout">Logout</a></li>
            <!-- logged out users -->
            <li *ngIf="!userDataInStorage"><a routerLink="/login">Login</a></li>
            <li *ngIf="!userDataInStorage"><a routerLink="/register">Register</a></li> */}
                    <li><span>Hello, Iliya</span></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><a>Catalog</a></li>

                    <li><Link to='/add-car'>Add car</Link></li>
                    <li><a>My cars</a></li>
                    <li><a>Logout</a></li>

                    <li><Link to='/login'>Login</Link></li>
                    <li><a>Register</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;