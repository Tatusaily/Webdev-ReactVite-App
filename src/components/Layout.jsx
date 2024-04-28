import { Outlet, Link } from "react-router-dom";
import { useUserContext } from '../hooks/contextHooks';

import Button from "./UI/Button";



const Layout = () => {
    const {user, handleLogout, handleAutoLogin} = useUserContext();

    return (
    <div>
        <header>
            <nav>
                <Link to="/">Home</Link>
                {user ? (
                    <>
                        <Link to="/profile">Profile</Link>
                        <Link to="/upload">Upload</Link>
                        <Button text="Log Out" onClick={handleLogout}></Button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <p>Footer</p>
        </footer>
    </div>
    );
};

export default Layout;