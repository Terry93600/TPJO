import "./bas.css"

const Bas = () => {
    return <>
    <footer>
        <article id="new">
            <h2>Newsletter</h2>
            <section>
                <p>La newsletter de Paris 2024 est votre rendez-vous pour tout savoir des Jeux qui se préparent près de chez vous.</p>
                <button>En savoir plus</button>
            </section>
        </article>
        <article id="lien">
            <h2>Liens utiles</h2>
            <ul>
                <li><a href="#">CIO</a></li>
                <li><a href="#">IPC</a></li>
                <li><a href="#">CNOSF</a></li>
                <li><a href="#">CPSF</a></li>
                <li><a href="#">Beijing 2022</a></li>
                <li><a href="#">Milano Cortina 2026</a></li>
                <li><a href="#">LA 2028</a></li>
                <li><a href="#">Olympic channel</a></li>
            </ul>
        </article>
        <article id="rec">
            <h3>Recrutement</h3>
            <ul>
                <li><a href="#">Mention légal</a></li>
                <li><a href="#">Accessibilité Site</a></li>
                <li><a href="#">Politique de confidentialité</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Appel d'Offres et Consultations</a></li>
                <li><a href="#">Condition Générales d'Achat</a></li>
            </ul>
        </article>
    </footer>
    </>
}

export default Bas;