import React from "react";

export default function FlagCard(props) {
    return (
        <div className="flag-card">
            <h1>{props.name}</h1>
            <p>Population: {props.population}</p>
            <p>Region: {props.region}</p>
            <p>Capital: {props.capital}</p>
            <p>continent: {props.continent}</p>
            <img src={props.flag} alt={props.name} width='300px' height='180px'/>
        </div>
    );
}

