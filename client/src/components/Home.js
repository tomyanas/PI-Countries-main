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
    const [currentPage, setCurrentPage] = useState(1); // pagina actual
    const [countriesPerPage, setcountriesPerPage] = useState(9);//paises por pagina
    const indexOfLastCountry = currentPage * countriesPerPage; //multiplicar la pagina actual por los paises por pagina y me da el indice ultimo pais 1*10=10, 2*10=20, 3*10=30
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; // si resto el indice del ultimo pais por la cantidad de paises por pagina me da el indice del primer pais 10-10=0, 20-10=10, 30-10=20  
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);  // con el slice pasandole el indice del primer pais y el indice del ultimo pais me da los paises de la pagina actual 

 const paginate = pageNumber => {
     setCurrentPage(pageNumber);
    if (pageNumber === 1) {
        setcountriesPerPage(9);
        console.log(countriesPerPage)
    }else {setcountriesPerPage(10);}
    
        
    } 
    
  
   
 
 
//DISPATCH ---------------------------------------------------------------------->

    useEffect(() => { 
        dispatch(getActivites());
    }, [dispatch]);


    useEffect(() => {  
      dispatch(getCountries()); 
    }, [dispatch]);
    

//DISPATCH ---------------------------------------------------------------------->    


//HANDLE CHANGE ---------------------------------------------------------------------->

    function handleFilterActivities(e) {
        setCurrentPage(1);
        e.preventDefault();
        dispatch(filterCountriesByActivities(e.target.value));
    }
    
    function handleFilterContinent(e) {
        setCurrentPage(1);
        e.preventDefault();
        dispatch(filterCountriesByContinent(e.target.value));
    }

    function handleSortabc(e) {
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

    function handleClick(e) {
        e.preventDefault();
        dispatch(getCountries());
    }
    
    //HANDLE CHANGE ---------------------------------------------------------------------->
    
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
            <Link to="/activity"  style={{ textDecoration: 'none' }}><span  className='submitActivity' style={{color:'white'}}>CREATE ACTIVITIE </span></Link>
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
        <select onChange= {e => handleFilterContinent(e)}>
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
        <select onChange= {e => handleSortabc(e)}>
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
        <span  onClick={e => {handleClick(e)}}>REFRESH COUNTRIES</span>
       </div>
       </div>
        </div>
       
        <Paginado
        countriesPerPage={countriesPerPage}
        countries = {countries.length}
        paginate={paginate}
        />
    
       
        {
        
        currentCountries?.map((country) => {
            //console.log(country.id)
            return ( 
                
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
            )})}
        </div>
        

    );
}
