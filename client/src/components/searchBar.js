import React from "react";
import {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import {getNameCountry} from "..//actions//index";
import '..//components///searchbar.css';


export default function SearchBar() {
const dispatch = useDispatch();
const [name, setName] = useState("");


      useEffect(() => {
        dispatch(getNameCountry(name));
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
    let url="";
return (
    <div className='searchbox'>
        <input
            className="search-bar"
            type="text"
            placeholder="Search Country"  
            onChange={(e) => handleInputChange(e)} 
            value={name}
            onKeyDown={handleKeyPress}
            />
        <a
        href={url}
        className="search-button"
        type="submit"
        onClick={(e) => handleSubmit(e)}   
        >
            Go!
        </a>
    </div>
);
}
