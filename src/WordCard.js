import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import Score from './Score';
import _ from 'lodash';



const prepareStateFromWord = (given_word) => {
   
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 0,
        guess: '',
        completed: false,
        
        
       

    }
}

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value))
    const [dataState, setDataState] = useState(
        {
           counter: 0
        }
    )
    const [countState, setCountState] = useState(
        {
           count: 3,
           
        }
    )

    const activationHandler = c => {


        let guess = state.guess + c
        setState({ ...state, guess })
        if (guess.length === state.word.length) {
            if (guess === state.word) {
                setState({ ...state, guess: '', completed: true})
                console.log('yeah!')               
                plusScore()
            } else {
                console.log('reset')
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
                attempt()
                // window.location.reload()
               
               
            }
        }

        console.log(guess)
       
        
    }
    const plusScore = ()  =>
    {       
            setDataState({
                counter: dataState.counter +1
            })
            
    }

    const attempt = () =>{
        setCountState({
            count: countState.count - 1,
           
        })
       
    }
 

    
    return (
        <div>
            <div>
            {
                state.chars.map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt = {state.attempt} completed = {state.completed}/>)               
            }
            </div>
           <div >
             <Score score = {dataState.counter} attempt ={countState.count} completed = {state.completed} word= {state.word} guess ={state.guess}/>
           </div>
        
        </div>

    )
}

