import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
        <nav className="navbar mb-0 navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid px-5">
               
                    <ul className="navbar-nav me-auto mb-lg-0 d-flex flex-row w-100 justify-content-between">
                        <div className="d-flex w-50 gap-3">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        </div>
                        <div className="d-flex">
                        <li className="nav-item d-flex flew-row align-items-center">
                            <a className="nav-link" href="https://github.com/SkynoDore">
                            <i className="devicon-github-original fs-5 px-2"></i>
                            Github</a>
                        </li>
                        </div>
                    </ul>
         
            </div>
        </nav>
    </header>
    );
}