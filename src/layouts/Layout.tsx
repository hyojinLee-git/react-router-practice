import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    const links = [
        { to: "/", name: "main" },
        { to: "/login", name: "login" },
        { to: "/posts", name: "post" },
    ];
    return (
        <>
            <nav>
                <ul>
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link to={link.to}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {<Outlet />}
        </>
    );
};

export default Layout;
