import React from 'react';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import {getCountries} from '../actions/index';
import { Link } from 'react-router-dom';
import video from '..//components//Earth.mp4';
import '..//components//Landing.css';


export default function LandingPage () {



const dispatch = useDispatch();

useEffect(()=>{
   dispatch (getCountries());
},[dispatch])


 return (
    <div 
    className="landing-page">
       <h1>Welcome to my Country App</h1>
            <Link to="/home">
                <button className="radioactive" >Start</button>
            </Link>
   <video 
   autoPlay
   loop
   muted
   style={{
         position: 'fixed',
         top: '0',
         left: '0',
         width: '100%',
         height: '100%',
         zIndex: '-1'
      }}         
   >
   <source src={video} type="video/mp4"/>
   </video>
    </div>
 )
}