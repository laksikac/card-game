import React, { useState } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import Score from './Score';

const word = "Hello";
function App() {
    
    return (
        
        <div>
           <h2>Spell the word below </h2>
           <h2>Ready Let's Go!!!</h2>
           
           <WordCard value = {word}/>
           <CharacterCard/>
          
        </div>
    );
}
export default App;