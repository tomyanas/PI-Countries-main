import React from "react";
import {useState} from "react";
import { useDispatch } from "react-redux";
import {getNameCountry} from "..//actions//index";

export default function SearchBar() {
const dispatch = useDispatch();
const [name, setName] = useState("");

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
    <div className="search-bar">
        <input
            type="text"
            placeholder="Search for a country"  
            onChange={(e) => handleInputChange(e)} 
            value={name}
            onKeyDown={handleKeyPress}
            />
        <button
        type="submit"
        onClick={(e) => handleSubmit(e)}   
        >
            Search
        </button>
    </div>
);
}
