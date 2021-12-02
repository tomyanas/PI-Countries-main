import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCountries, postActivity } from "../../actions";
import { useSelector, useDispatch } from "react-redux";


export default function CrateActivity(props) {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries); 
    const countriesList = useSelector(state => state.allCountries);
    const [country, setCountry] = useState([]);
    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
    });
    

    //console.log(input);
    //console.log(countriesList);

    const handdleChange = e => {
        setInput({
            ...input,
           name: e.target.value
        });
    };

    const handdleChangeSeason = e => {
        setInput({
            ...input,
           season: e.target.value
        });
    };

    const handdleChangeDifficulty = e => {
        setInput({
            ...input,
            difficulty: e.target.value
        });
    };

    const handdleChangeDuration = e => {
        setInput({
            ...input,
            duration: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(postActivity(input));
        alert("Activity created");
        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: [],
        });
        setCountry([]);
    };

 useEffect(() => {
    dispatch(getCountries());
}, []); 

const handleChangeCountry = (e) => {
    setInput({
        ...input,
        countries: [...input.countries, e.target.value]
    });
    setCountry([...country, e.target.value]);
}



return (
    <div className="container">
        <Link to="/home"> Home </Link>
        <h1>Create Activity</h1>
        <div>

        </div>
        <form onSubmit= {(e)=>handleSubmit(e)}>
            <div>
                
            </div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    value={input.name}
                    onChange= {handdleChange}
                />
            </div >
            <div className="form-group">
                <label htmlFor="difficulty">Difficulty</label>
             <select onChange={e => handdleChangeDifficulty(e)}>
                <option value="Realy Easy">Realy Easy</option>
                <option value="Easy">Easy</option>
                <option value="meddium">meddium</option>
                <option value="Hard">Hard</option>
                <option value="Realy Hard">Realy Hard</option>
             </select>
            </div>
            <div className="form-group">
                <label htmlFor="duration">Duration</label>
                <select onChange={e => handdleChangeDuration(e)}>
                <option value="15 min">15 min</option>
                <option value="30 min">30 min</option>
                <option value="1 hour">1 hour</option>
                <option value="2 hours">2 hours</option>
                <option value="3 hours">3 hours</option>
                <option value="4 hours">4 hours</option>
                <option value="4 hours">4 hours</option>
                <option value="5 hours">5 hours</option>
                <option value="6 hours">6 hours</option>
                <option value="7 hours">7 hours</option>
                <option value="8 hours">8 hours</option>
                <option value="more than 8 hours">more than 8 hours</option>
             </select>
            </div>
            <div className="form-group">
                <label htmlFor="season">Season</label>
                <select onChange={e => handdleChangeSeason(e)}>
                    <option value="">Select a season</option>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="autumn">Autumn</option>
                    <option value="winter">Winter</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="countries">Select a country</label>
                <select onChange={e => handleChangeCountry(e)}>
                    {countries.map(country => (
                        <option key={country.id} value={country.name}>
                            {country.name }
                         </option>
                    ))}

                </select>
                <div>
                 {country?.map(c => countriesList.map(country => {{if (country.name === c) {
                    return ( 
                    <div>
                        <h3>{country.name}</h3>
                        <img src={country.flag} alt={props.name} width='100px' height='50px'/>
                        </div>
                    )
                 }}
                    }))}

                 </div>       
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>

        </form>
    </div>
);
}


