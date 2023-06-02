import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";


const epreuves = () => {

    const [epreuve, setEpreuve] = useState([]);

    async function getAllepreuves() {
    const response = await axios.get("https://localhost:3001/api/epreuves")
        console.log('response', response.data.data)
        setEpreuve(response.data.data)
    }

    // on a stocker la data dans usestate " sport"
    
    console.log('epreuve', epreuve)
    useEffect(() => {
        getAllEpreuves();
    }, [])


    return (<>
        <h3>Epreuves</h3>
        <article id="jeux">
            {sport.map((value) => (
                <p id="nos-jeux" key={crypto.randomUUID()}>
                    <a href="#">
                    <Link to={`/${value.name}/${value.id}`}>
                            {`${value.name}`}
                        </Link>
                    </a>
                </p>
            )
            )}
        </article>
    </>
    ) 
}