import React from "react";
import { Link } from "react-router-dom";
import '..//Flags//flagCard.css';

export default function FlagCard(props) {
    return (
             
        <div className="flip">
            <div className="front" style={{backgroundImage:`url(${props.flag})`}} >
                <div className="flag-box-name">
            {/* <img src={props.flag} alt={props.name} width='280px' height='180px'/> */}
               </div>
            </div>
            <div className="back">
            <Link to={`/home/${props.id}`}  style={{ textDecoration: 'none' }}> 
            <h1 className="text-shadow">{props.name}</h1>
            <p>Population: {props.population}</p>
            <p>Region: {props.region}</p>
            <p>Capital: {props.capital}</p>
            <p>continent: {props.continent}</p>
            </Link>
            </div>
        </div>
             
    );
}

