import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="header">
                <Link to="/">
                <span className="title logo h2">
                    Hotel Mania
                </span>
                </Link>
                <span>
                    Login
                </span>
            </nav>
        </>
    )
}

export {Navbar}