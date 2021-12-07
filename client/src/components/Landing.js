import React from 'react';
import { Link } from 'react-router-dom';
import video from '..//components//Earth.mp4';
export default function LandingPage () {
 return (
    <div 
    className="landing-page">
       <h1>Welcome to my country app</h1>
         <p color='white'>This is a simple app that allows you to search for countries caracteristics and activities</p>
            <Link to="/home">
                <button color='white' >Start</button>
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