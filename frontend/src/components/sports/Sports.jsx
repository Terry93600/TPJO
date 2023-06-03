import "../sports/sports.css"

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

// get les sports
const Sports = () => {

    const [sport, setSport] = useState([]);

    async function getAllSports() {
    const response = await axios.get("https://localhost:3001/api/sports")
        console.log('response', response.data.data)
        setSport(response.data.data)
    }

    // post les sports:
     
    const requestInfosApi = new Request("https://localhost:3001/api/sports", {
        method: "post",

        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
        
        }),

    });
    
        
    

            // on a stocker la data dans usestate " sport"
            console.log(requestInfosApi, 'api');
            console.log('sport', sport)
            useEffect(() => {
                getAllSports();
            }, [])
    
    
            const handleSubmit = async (e) => {
                e.preventDefault();
                // console.log('coucou');
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData);
                
                const requestInfos = new Request('https://localhost:3001/api/sports', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const request = await fetch(requestInfos);
                const response = await request.json();
                console.log(response);
            };

    return (<>
        <hr />

        <h3>Les sports olympiques</h3>
        <form className="form-add" method="post" onSubmit={handleSubmit}>
            <label htmlFor="">add sport</label>
            <input type="text" name="name" />
            <label htmlFor="">add sport  picto</label>
            <input type="text" name="picto" />
            <button type="submit" >Envoyer</button>
        </form>

        <article id="jeux">
            {sport.map((value) => (
                <p id="nos-jeux" key={crypto.randomUUID()}>
                    <Link to={`/${value.name}/${value.id}`}>
                            {`${value.name}`}
                        </Link>
                </p>
            )
            )}
        </article>
    </>
    )
}

export default Sports;