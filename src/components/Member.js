import React, { Component } from 'react';
import './Member.css';

const  Memeber =({name,age,CMode,GInfo}) =>{

    const url = require( `./12/select/${name}.jpg`) ;

    return(
        <div className="Pic" onClick={() =>{GInfo(name,age); CMode()}}>
           <img src={url} />
        </div>
    )
}

export default  Memeber;