import { Link } from "react-router-dom"

function Navbar () {
    return (
    <nav className="nav">
            <Link to="/" className="site-title">
                NC News Site
            </Link>
            <ul>
                <li>
                    <Link to="/articles"> Articles</Link>
                    {/* <Link to="/topics">Topics</Link>
                    <Link to="/comments"> Comments</Link> */}
                    <Link to="/user"> Profile</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar