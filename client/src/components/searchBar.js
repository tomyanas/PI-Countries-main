import React from "react";
import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getNameCountry} from "..//actions//index";
import '..//components///searchbar.css';
import { Link } from "react-router-dom";



export default function SearchBar() {
const dispatch = useDispatch();
const [name, setName] = useState("");


      useEffect(() => {
          if (name.length > 0) { 
        dispatch(getNameCountry(name))
          }
     }, [name,dispatch]);  

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getNameCountry(name));
        setName("");
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            dispatch(getNameCountry(name));
            setName("");
        }
    }
    
return (
    <div className='searchbox'>
        <Link to="/about" style={{ textDecoration: 'none' }}> <h5  className="search-button2">ABOUT</h5></Link>
        <input
            className="search-bar"
            type="text"
            placeholder="Search Country"  
            onChange={(e) => handleInputChange(e)} 
            value={name}
            onKeyDown={handleKeyPress}
            />
        <h5
        className="search-button"
        type="submit"
        onClick={(e) => handleSubmit(e)}   
        >
            GO!
        </h5>
    </div>
);
}
