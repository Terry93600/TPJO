import "../sports/sports.css"

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";


const Sports = () => {

    const [sport, setSport] = useState([]);

    async function getAllSports() {
    const response = await axios.get("https://localhost:3001/api/sports")
        console.log('response', response.data.data)
        setSport(response.data.data)
    }
// on a stocker la data dans usestate " sport"
    
    console.log('sport', sport)
    useEffect(() => {
        getAllSports();
    }, [])
    
// on appel la data ici avec un map sur la BDD, le LINK ici il permet de changer l'url en fonction du sport sur lequel on click grace a la variable:
    return (<>
    <hr />
        <h3>Les sports olympiques</h3>
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

export default Sports;