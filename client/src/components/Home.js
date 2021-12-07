import React from 'react';
import { useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {filterCountriesByActivities, getActivites, getCountries , filterCountriesByContinent, filterCountriesByOrderAbc, filterCountriesByOrderPoblatinal} from '../actions/index';
import {Link} from 'react-router-dom';
import FlagCard from './Flags/FlagCard';
import Paginado from './Paginado'; 
import SearchBar from '..//components//searchBar';
import '..//components//home.css';

export default function Home() {
    const dispatch = useDispatch();
    
    const countries = useSelector(state => state.countries); // {allCharacters}esto es lo mismo que hacer el mapStateToProps
    const activities = useSelector(state => state.activities);// use selector para obtener el state de redux de actividades
    const [orden, setOrden] = useState('');
    const [order2, setOrder2] = useState('');
    const [order3, setOrder3] = useState('');
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
 
//useEffect SIRVE PARA 

    useEffect(() => { 
        dispatch(getActivites());
    }, [dispatch]);
  
    useEffect(() => {
        dispatch(getCountries()); 
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

    function handleFilterActivities(e) {
        e.preventDefault();
        dispatch(filterCountriesByActivities(e.target.value));
    }

    return (
    <div> 
        <div className= "searchRefresh">
            <div>
              <SearchBar />
            </div>
            </div>
            <div className="separation">
            <div className="containerbthome">
               <div className="btn5"> 
            <Link to="/activity"  style={{ textDecoration: 'none' }}><a className='submitActivity' style={{color:'white'}}>CREATE ACTIVITIE </a></Link>
        
            </div>
                </div>
            <div className="select"> 
            <select onChange={e => handleFilterActivities(e)}> 
                <option value='All'>Activity</option>
                {activities.map(activity => (
                    <option key={activity.id} value={activity.id}>{activity.name}</option>
                    ))}
            </select>
            </div>
            <div className="select">
        <select onChange= {e => handleFilterStatus(e)}>
            <option value="All">Continent</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
           
        </select>
        </div>
        <div className="select">
        <select onChange= {e => handleSort(e)}>
            <option value="asc">A - Z / Z  - A</option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
        </select>
        </div>
        <div className="select">
        <select onChange= {e => handleSortPoblatinal(e)}>
            <option value="asc">Poblation ASC/DESC</option>
            <option value="pAsc">ASC</option>
            <option value="pDsc">DESC</option>
        </select>
        </div>
        <div className="containerbthome">
               <div className="btn5"> 
        <a  onClick={e => {handleClick(e)}}>Refresh countries</a>
       </div>
       </div>
        </div>
        {/*  <div>
            <h1  className="txt">Country list</h1>
        </div>   */}
        <Paginado
        countriesPerPage={countriesPerPage}
        countries = {countries.length}
        paginate={paginate}
        />
    
       
        {currentCountries?.map((country) => {
            //console.log(country.id)
            if (!country){
                return <p>Loading...</p>
            } else {
            return ( 
                <>
            <FlagCard 
            key={country.id}
            id={country.id} 
            name={country.name} 
            population={country.population}
            region={country.subregion}
            capital={country.capital}
            flag={country.flag}
            continent={country.continent}
            />
             
            </>
            )}})}
        </div>
        

    );
}
