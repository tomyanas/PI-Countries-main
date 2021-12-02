import React from "react";

export default function Paginado(props ) {

const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.countries / props.countriesPerPage); i++) {
        pageNumbers.push(i);
    }   
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers &&
                 pageNumbers.map(number => (
                
                    <a onClick={() => props.paginate(number)} key={number}> {number} </a>
                    
                ))}
            </ul>
        </nav>
    );


}

