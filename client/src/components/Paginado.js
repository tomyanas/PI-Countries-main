import React from "react";
import'..//components//paginado.css';
export default function Paginado(props ) {

const pageNumbers = [];

    for (let i = 1; i <= Math.floor(props.countries / props.countriesPerPage); i++) {
        pageNumbers.push(i);
    }   
   
    if (props.countries === 0) {
        return (
            <div className="paginado">
               <div id="contenedor">
                 <div className="loader" id="loader">Loading...</div>
                </div>
            </div>
        );
    } else {


    return (
        <nav>
            <ul className="pagination">
                <span  className="text" >page {">>>"} </span>
                {pageNumbers &&
                 pageNumbers.map(number => (
                
                    <span className="text" onClick={() => props.paginate(number)} key={number}> {number} </span>
                    
                ))}
                <span className="text" > {"<<<"} page </span>
            </ul>
        </nav>
    );
    }
}

