import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Athlete = () => {

    const [Athlete, setAthlete] = useState([]);

    async function getAllAthlete() {
    const response = await axios.get("https://localhost:3001/api/athlete")
        console.log('response', response.data.data)
        setAthlete(response.data.data)
    }

    // on a stocker la data dans usestate " sport"
    
    console.log('athlete', Athlete)
    useEffect(() => {
        getAllAthlete();
    }, [])

    return (<>
        <h3>Athlete</h3>
        <article id="jeux">
            {Athlete.map((value) => (
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

export default Athlete;