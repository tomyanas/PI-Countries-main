import React from "react";
import'..//components//paginado.css';
export default function Paginado(props ) {

const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.countries / props.countriesPerPage); i++) {
        pageNumbers.push(i);
    }   
    return (
        <nav>
            <ul className="pagination">
                <a  className="text" >page {">>>"} </a>
                {pageNumbers &&
                 pageNumbers.map(number => (
                    <>
                    <a  className="text" onClick={() => props.paginate(number)} key={number}> {number} </a>
                    </>
                ))}
                <a  className="text" > {"<<<"} page </a>
            </ul>
        </nav>
    );


}

