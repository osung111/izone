import React, { Component } from 'react';
import './ViewMember.css';

const ViewMember =({name,age,CMode}) =>{
    const url = require( `./12/${name}.jpg`) ;
        
        return(
            <div className="View">
                <div className="Profile" >
                    <img src={url}   />
                </div> 
                <div className="Profile2">
                   <div className="Info"> 
                        <h1>{name}</h1>
                        <h2>{age}</h2>
                        <div className="Back" onClick={CMode}>🔙</div>
                   </div> 
                </div>    
            </div>
        ) 
}

export default ViewMember ;