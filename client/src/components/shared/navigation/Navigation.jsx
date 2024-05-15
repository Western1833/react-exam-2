import '../navigation/nav-styles.css';

const Navigation = () => {
    return (
        <header class="site-section site-header">
            <div class="site-logo">
                <a href="/">
                    <img src="remade-logo-2.png" alt="Logo" />
                </a>
                <a href="/"><span>CarSales</span></a>
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
                    <li><a href='/'>Home</a></li>
                    <li><a>Catalog</a></li>

                    <li><a>Add car</a></li>
                    <li><a>My cars</a></li>
                    <li><a>Logout</a></li>

                    <li><a href='/login'>Login</a></li>
                    <li><a>Register</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;