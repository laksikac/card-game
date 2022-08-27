import React, { useState, useEffect, useRef } from 'react';


export default function Score(props){
    //let message = '';
    const className = `cardScore `
   
    
    return (
       
        <div className={className}>
            <span>Score: {props.score}</span>
        </div>
        
        
        
      
            
    )

}

