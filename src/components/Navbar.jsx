import { Link } from "react-router-dom"

function Navbar () {
    return (
    <nav className="nav">
            <Link to="/" className="site-title">
                NC News Site
            </Link>
            <ul>
                <li>
                    <Link to="/articles/2"> Art_id 2</Link>
                    <Link to="/articles"> Articles</Link>
                    <Link to="/topics">Topics</Link>
                    <Link to="/comments"> Comments</Link>
                    <Link to="/users"> Users</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar