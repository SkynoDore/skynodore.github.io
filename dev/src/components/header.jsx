import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
        <nav className="navbar mb-0 navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid px-5">
               
                    <ul className="navbar-nav me-auto mb-lg-0 d-flex flex-row w-100 justify-content-between">
                        <div className="d-flex w-50 gap-3">

                        </div>
                        <div className="d-flex">
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/SkynoDore">Github</a>
                        </li>
                        </div>
                    </ul>
         
            </div>
        </nav>
    </header>
    );
}