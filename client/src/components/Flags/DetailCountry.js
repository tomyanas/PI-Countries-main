import React from "react";
import {Link,useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {countryDetails} from "..//..//actions//index";
import {useEffect} from "react";

export default function DetailCountry(props) {
    const dispatch = useDispatch();   

    const {id} = useParams();
    useEffect(() => {
        dispatch(countryDetails(id));
    }, [dispatch]);

const myCountry =  useSelector(state => state.details);
    return (
        <div className="container">
        {
            myCountry.length > 0 ?
            <div className="row">
                <h1>{myCountry[0].name}</h1>
                 <img src={myCountry[0].flag} width='300px' height='180px' alt= { myCountry[0].name}/>
                <p>Capital: {myCountry[0].capital}</p>
                <p>continent: {myCountry[0].continent}</p> 
                <p>Subregion: {myCountry[0].subregion}</p> 
                <p>Population: {myCountry[0].population}</p>
                <p>area: {myCountry[0].area} km2</p> 
                   {myCountry[0].activities?.map((c)=>
                   <>
                   <p>Activity name: {c.name}</p>
                   <p>Season: {c.season}</p>
                   <p>duration: {c.duration}</p>
                   <p>difficulty: {c.difficulty}</p>
                    </>
                   )} 
                 
            </div>
            : <h1>Loading...</h1>
        }
        <Link to="/home">Back</Link>
        </div>    
    )
}

