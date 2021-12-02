import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage () {
 return (
    <div className="landing-page">
       <h1>Welcome to my country app</h1>
         <p>This is a simple app that allows you to search for countries caracteristics and activities</p>
            <Link to="/home">
                <button>Start</button>
            </Link>
    </div>
 )
}