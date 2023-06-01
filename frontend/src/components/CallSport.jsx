import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";


const CallSport = () => {

    const [sport, setSport] = useState([]);

    async function getAllSports() {
    const response = await axios.get("https://localhost:3001/api/sports")
        console.log('response', response.data.data)
        setSport(response.data.data)
    }

    console.log('sport', sport)
    useEffect(() => {
        getAllSports();
    },[])
    return (
        <div>
            <h2>tout les sports:</h2>
            {sport.map((value) => (
               <p key={crypto.randomUUID()}>
                <Link to={`/sports/${value.id}`}>
                    {`${value.name}`}
                </Link></p>
                
            )
            )}
           </div>
       )
        
}

export default CallSport;