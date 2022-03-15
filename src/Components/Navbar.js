import { Link } from "react-router-dom"
import "./styles.css"

function Navbar() {

    return (
        <nav className="navbar fixed-top navbar-light bg-light p-2 mb-4 nav">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Link to="/">
                        <span style={{color: "black", margin: 30, fontSize: "30px"}}><strong>#better</strong>Together</span>
                    </Link>
                </a>
                 <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">Home</Link>
                    </li>
                     <li className="nav-item">
                        <Link className="nav-link text-dark" to="/articles">Causes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/register">Registration</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light green-btn" to="/chat">Chat with us</Link>
                    </li>
                </ul>
        </div>
    </nav>

    )
}

export default Navbar