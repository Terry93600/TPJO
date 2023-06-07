import { Link } from "react-router-dom";
import "../my-header/header.css"

const Header = () => {
    return <>
    <header>
        <nav>
            <a href="#"><img src="" alt="image accueil" /></a>
            <ul>
                <li><Link to={"/sports"}>Sports</Link></li>
                <li><Link to={"/athlete"}>Athlètes</Link></li>
                {/* <li><a href="#">Athlètes</a></li> */}
                <li><a href="#">Epreuves</a></li>
            </ul>
        </nav>
        <h1>LES SPORTS OLYMPIQUES ET LES NOUVEAUX SPORTS</h1>
    </header>
    </>
}

export default Header;