import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './header.css'
import logo from '../../assets/logo_agrisus.svg';
import { Link } from "react-router-dom";

<div className="logo-page">
    <img src={logo} />
    <div className="divisoria"></div>
    <span>Início</span>
</div>


export default function Header() {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid navbar container">
                    <a className="navbar-brand" href="#">
                        <Link to="/">
                            <div className="logo-page">
                                <img src={logo} />
                                <div className="divisoria"></div>
                                <span>Início</span>
                            </div>
                        </Link>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" >Mercado</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Ranking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Equipe</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}