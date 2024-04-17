import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    <div>
        <header>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/upload">Upload</Link>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
        </footer>
    </div>
};

export default Layout;