import React from "react";
import {Link} from "react-router-dom";


export default function About() {
  return (
    <div className="about">
      <h1>About</h1>    
        <p>
        This is a simple Country app that uses <a href="https://reactjs.org/" target="_blank"rel="noreferrer">React</a> JavaScript library for building the user interface
        </p>
        <p>
            Also uses the <a href="https://www.npmjs.com/package/react-router-dom" target="_blank" rel="noreferrer">react-router-dom</a> library to navigate between pages.
        </p>
        <p> 
            The <a href="https://redux.js.org/" target="_blank"rel="noreferrer">Redux</a> library is used to manage the state of the application.
        </p>
        <p>
            The <a href="https://www.npmjs.com/package/axios" target="_blank"rel="noreferrer">axios</a> library to make HTTP requests to the <a href="https://www.npmjs.com/package/json-server" target="_blank">json-server</a> server.
        </p>
        <p>
            the <a href= "https://github.com/reduxjs/redux-thunk" target="_blank"rel="noreferrer">Thunk</a> middleware to handle async actions
        </p>
        <p>
            The data is fetched from the <a href="https://restcountries.com" target="_blank"rel="noreferrer">REST Countries API</a>
        </p>
        <p>
            The <a href="https://sequelize.org/" target="_blank"rel="noreferrer" >sequalize</a> library to connect to the server.
        </p>
        <p>
            The database is stored in <a href="https://www.postgresql.org" target="_blank"rel="noreferrer">PostgreSQL</a>
        </p>
        <p>
            The routing in the backend is done using <a href="https://expressjs.com/" target="_blank"rel="noreferrer">Express</a>
        </p>
        <p>
            If you like to see the code, please visit my <a href="https://github.com/tomyanas/PI-Countries-main" target="_blank"rel="noreferrer">GitHub</a>
        </p>
        <p>
            Also you can visit my <a href="https://www.linkedin.com/in/tomas-anastasio/" target="_blank"rel="noreferrer">LinkedIn</a>
        </p>
        <br/>
        <p>
            Thank you for visiting my page! have a nice day!
        </p>
        <br/>
        <Link to="/home"> Back to Home</Link>

        </div>
    );
}

