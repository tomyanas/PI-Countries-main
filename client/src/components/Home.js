import React from 'react';
import { useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getActivites, getCountries , filterCountriesByContinent, filterCountriesByOrderAbc, filterCountriesByOrderPoblatinal} from '../actions/index';
import {Link} from 'react-router-dom';
import FlagCard from './Flags/FlagCard';
import Paginado from './Paginado'; 
import SearchBar from '..//components//searchBar';

export default function Home() {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries); // {allCharacters}esto es lo mismo que hacer el mapStateToProps
    const activities = useSelector(state => state.activities);// use selector para obtener el state de redux de actividades
    const [orden, setOrden] = useState('');
    const [order2, setOrder2] = useState('');
    const [currentPage, setCurrentPage] = useState(1); // le paso la pagina actual y cual va a  ser la pagina actual
    const [countriesPerPage, setcountriesPerPage] = useState(9);//aca seleccionamos la cantidad de paises que queremos mostrar por pagina
    const indexOfLastCountry = currentPage * countriesPerPage; //{indexOflastCharacter}aca seleccionamos el ultimo pais que queremos mostrar , pagina actual * cantidad de paises por pagina
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //{indexOfFirstCharacter}aca seleccionamos el primer pais que queremos mostrar , ultimo pais - cantidad de paises por pagina     
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);  // {currentCharacters} aca seleccionamos los paises que queremos mostrar en la pagina actual

 const paginate = pageNumber => {
     setCurrentPage(pageNumber);
    if (pageNumber === 1) {
        setcountriesPerPage(9);
    }else if (pageNumber) {
    for (let i = 2; i <= pageNumber; i++){
        if (pageNumber === i) {
            setcountriesPerPage(10);
        
    }   
   } 
 }
}


    useEffect(() => { //------------------useEffect para obtener las actividades
        dispatch(getActivites());
    }, []);
  
    useEffect(() => {
        dispatch(getCountries()); // esto es lo mismo que hacer el mapDispatchToProps
    }, [dispatch]);

    
    function handleClick(e) {
        e.preventDefault();
        dispatch(getCountries());
    }

    function handleFilterStatus(e) {
        e.preventDefault();
        dispatch(filterCountriesByContinent(e.target.value));
    }

    function handleSort(e) {
        e.preventDefault();
        dispatch(filterCountriesByOrderAbc(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`);
    }

    function handleSortPoblatinal(e) {
        e.preventDefault();
        dispatch(filterCountriesByOrderPoblatinal(e.target.value));
        setCurrentPage(1);
        setOrder2(`Ordenado ${e.target.value}`);
    }

    return (
        <div>
            <Link to="/country">Countries</Link>
            <h1>Full list of counties</h1>
            <button onClick={e => {handleClick(e)}}>Get countries</button>
        <div>
            <div>
              <SearchBar />
            </div>
        <select onChange= {e => handleFilterStatus(e)}>
            <option value="All">All</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
           
        </select>
        <select onChange= {e => handleSort(e)}>
            <option value="asc">Ascendente A - Z</option>
            <option value="desc">Descendente Z - A</option>
        </select>
        <select onChange= {e => handleSortPoblatinal(e)}>
            <option value="pAsc">Poblacion ASC</option>
            <option value="pDsc">Poblacion DESC</option>
        </select>

        <Paginado
        countriesPerPage={countriesPerPage}
        countries = {countries.length}
        paginate={paginate}
        />
        </div>
       
        {currentCountries?.map((country) => {
            //console.log(country.id)
            return( 
                <Fragment>
                    <Link to={`/home/${country.id}`}>
            <FlagCard 
            key={country.id} 
            name={country.name} 
            population={country.population}
            region={country.subregion}
            capital={country.capital}
            flag={country.flag}
            continent={country.continent}
            />
            </Link>
            </Fragment>
            )})}
        </div>
        

    );
}
