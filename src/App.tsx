import { useEffect, useState } from "react";
import "./App.css";
import { HangImage } from "./components/HangImage";
import { letters } from "./helpers/letters";
import { getRandomWord } from "./helpers/getRandomWord";

function App() {

 const [ word, setWord ] = useState( getRandomWord() );
 const [ hiddenWord,setHiddenword ] = useState('_ '.repeat( word.length ));    
 const [ attempts, setAttempts ] = useState(0);
 const [ lose, setLose ] = useState( false );
 const [ won, setWon ] = useState( false );

 // Determinar si la persona perdio
 useEffect( () =>  {
  if( attempts >= 9) {
    setLose( true );
  }
  
 }, [ attempts ]);

 // Determinar si la persona gano
 useEffect( () => {
  const currentHiddenWord = hiddenWord.split(' ').join('');
  if( currentHiddenWord === word ) {
    setWon( true );
  }

 }, [ hiddenWord ])

const checkLetter = ( letter: string ) => {
  if( lose ) return;
  if( won ) return;

  if ( !word.includes(letter) ) {
    setAttempts( Math.min( attempts + 1, 9 )  );
    return;
  }

  const hiddenWordArray = hiddenWord.split(' ');
 ;

  for( let i = 0; i < word.length; i++) {
    if( word[i] === letter ) {
      hiddenWordArray[i] = letter;
    }
  }
  setHiddenword(hiddenWordArray.join(' ')); 
}

const NewGame = () => {
  const newWord = getRandomWord();
  
  setWord(newWord);
  setHiddenword('_ '.repeat( newWord.length ) );
  setAttempts( 0 );
  setLose( false );
  setWon( false );
}
 
  return (
    <div className="App">
      { /* Imagenes */ }
      <HangImage imageNumber={ attempts  } />

      { /* IPalabra oculta */ }
      <h3>{ hiddenWord }</h3>

      { /* Contador de intentos */ }
      <h3>Intentos: { attempts }</h3>

      { /*Mensaje si perdió*/ }
      {
        ( lose ) 
        ? <h2>Perdió: { word } </h2>
        : ''
      }
      { /*Mensaje si Ganó*/ }
      {
        ( won ) 
        ? <h2>Felicidades, Usted Ganó</h2>
        : ''
      }

      {/* Botones de letras */ }
      {letters.map((letter) => (
        <button 
        onClick={ () => checkLetter(letter) }
        key={letter}>
          {letter}
          </button>
      ))
      
      }

      <br /><br />
      <button onClick={ NewGame }>¿Nuevo Juego?</button>     

    </div>
  );
}

export default App;
