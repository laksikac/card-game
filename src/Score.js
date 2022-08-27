import React from 'react';



export default function Score(props){
 
    const className = `cardScore `
    if(props.attempt === 0){
       window.location.reload();
    }
   
    
    return (
       <div>
   
        <div className={className}>
            <span>word: {props.guess}</span>
        </div >
        {
            props.completed? 
            <div className="popUp">
                <span>
                Congratulations!, this word is {props.word}
            </span>
            </div>
            :null
        }
        <div className={className}>
            <span>attempt: {props.attempt}</span>
        </div>
         <div className={className}>
         <span>Score: {props.score}</span>
      </div>
      </div>
        
        
      
            
    )

}

