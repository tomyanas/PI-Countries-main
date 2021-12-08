import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCountries, postActivity } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import '..//activities//creatActivity.css';



function validate(input){
    let errors = {};
    if(!input.name){
        errors.name = "Name is required";
    }
    if(input.name.length > 15){
        errors.name = "Name must be less than 20 characters";
    }
    if(!input.difficulty){
        errors.difficulty = "Difficulty is required";
    }
    if(!input.duration){
        errors.duration = "Duration is required";
    }
    if(!input.season){
        errors.season = "Season is required";
    }
    if(input.countries.length === 0){
        errors.countries = "Country is required";
    }
    return errors;
}

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
    const [errors, setErrors] = useState({});

    //console.log(input);
    //console.log(countriesList);

    const handdleChangeName = e => {
        setInput({
            ...input,
           name: e.target.value
        });
        setErrors(validate({
            ...input,
            name: e.target.value
        }));
    };

    const handdleChangeSeason = e => {
        setInput({
            ...input,
           season: e.target.value
        });
        setErrors(validate({
            ...input,
            season: e.target.value
        }));
    };

    const handdleChangeDifficulty = e => {
        setInput({
            ...input,
            difficulty: e.target.value
        });
        setErrors(validate({
            ...input,
            difficulty: e.target.value
        }));
    };

    const handdleChangeDuration = e => {
        setInput({
            ...input,
            duration: e.target.value
        });
        setErrors(validate({
            ...input,
            duration: e.target.value
        }));
    };

    const handleSubmit = e => {
        if (Object.keys(errors).length > 0) {
            alert("Please fill out all fields");
        } else {
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
        }
    };

 useEffect(() => {
    dispatch(getCountries());
}, [dispatch]); 

const handleChangeCountry = (e) => {
    setInput({
        ...input,
        countries: [...input.countries, e.target.value]
    });
    setCountry([...country, e.target.value]);
    setErrors(validate({
        ...input,
        countries: [...input.countries, e.target.value]
    }));
}

const handleOnClose = (e) => {
    setCountry(country.filter(country => country !== e.target.value));
    setInput({
        ...input,
        countries: country.filter(country => country !== e.target.value)
    });
}



return (
    <div className="container">
        <Link to="/home"> Home </Link>
        <h1>LETS CREATE AN ACTIVITY!</h1>
        <div>

        </div>
        <form onSubmit= {(e)=>handleSubmit(e)}>
            <div className='dividebytwo'>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                
                <input
                    type="text"
                    className="nameact"
                    id="name"
                    placeholder="Activity name"
                    value={input.name}
                    onChange= {handdleChangeName}
                />
            
                {errors.name && (  <p className="error" style={{color:'red'}}>{errors.name}</p>)} 
               
            </div >
            <div className="form-group">
                <label htmlFor="difficulty">Difficulty</label>
                <div className="selecttwo">
             <select onChange={e => handdleChangeDifficulty(e)}>
             <option>Select difficulty</option>
                <option value="Realy Easy">Realy Easy</option>
                <option value="Easy">Easy</option>
                <option value="meddium">meddium</option>
                <option value="Hard">Hard</option>
                <option value="Realy Hard">Realy Hard</option>
             </select>
             </div>
                {errors.difficulty && (  <p className="error" style={{color:'red'}}>{errors.difficulty}</p>)}
            </div>
            </div>
            <div className='dividebytwo'>
            <div className="form-group">
                <label htmlFor="duration">Duration</label>
                <div className="selecttwo">
                <select onChange={e => handdleChangeDuration(e)}>
                <option value="">Select duration</option>
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
                {errors.duration && (  <p className="error" style={{color:'red'}}>{errors.duration}</p>)}
            </div>
            <div className="form-group">
                 <label>Season</label> 
                 <div className='selecttwo'>
                <select onChange={e => handdleChangeSeason(e)}>
                    <option value="">Select a season</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                </select>
                </div>
                {errors.season && (  <p className="error" style={{color:'red'}}>{errors.season}</p>)}
            </div>
            </div>
            <div className="form-group">
                <label htmlFor="countries">Select a country</label>
                <div className='selectthree'>
                <select onChange={e => handleChangeCountry(e)}>
                <option value="">Select a country</option>
                    {countries.map(country => (
                        <option key={country.id} value={country.name}>
                            {country.name}
                         </option>
                    ))}
                </select>
                </div>
                {errors.countries && (  <p className="error" style={{color:'red'}}>{errors.countries}</p>)}
                <div className='boxflags'>
                 {country?.map(c => countriesList.map(country => {{if (country.name === c) {
                    return ( 
                        <div className="flip1">
                             <div className="front1" style={{backgroundImage:`url(${country.flag})` }} width='100px' height='50px'>
                                {/* <img src={country.flag} alt={props.name} width='100px' height='50px'/>*/}
                            </div>
                                <div className="back1">
                                 <p className='nameselcou'>{country.name}</p>
                                 <button onClick={e => handleOnClose(e)} value={country.name}>close</button>
                                </div>
                         </div>
                    )
                 }}
                    }))}

                 </div>       
            </div>
            <>
            <div className='containerbt'>
            <div type="submit" className="btn btn-primary" onClick={e => handleSubmit(e)}>
                <a className='submitActivity' >Submit</a>
            </div>
            </div>
            </>
        </form>
    </div>
);
}




