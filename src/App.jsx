import './App.css'
import Card from './components/Card'
import { useState } from 'react'

const pokemons = ['pikachu', 'charizard', 'mewtwo', 'eevee', 'blastoise', 'pidgey', 'clefairy', 'ninetales', 'jigglypuff', 'meowth', 'bulbasaur', 'charmander'];

function App() {
  const [count, setCount] = useState(0);
  const [pokemonList, setPokemonList] = useState(pokemons)
  const [moves, setMoves] = useState([])
  const [bestScore, setBestScore] = useState(0)

  const handleGame = (e, pokemon) => {
    if (!moves.includes(pokemon) || !moves) {
      setMoves([...moves, pokemon]);
      setCount(count + 1);
    } else {
      setCount(0);
      setMoves([])
      if (count > bestScore) {
        setBestScore(count)
      }
    }
    handlePokemonList();
    
  }
  
  const handlePokemonList = () => {
    let array = pokemonList;
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    setPokemonList(array);
  }

  return (
    <>
        <header>
          <h3>Pokemon Memory game - Get points by clicking on an image but do not click on any more than once!</h3>
          <div className="score">
            <span>Score: {count}</span>
            <span>Best score: {bestScore}</span>
          </div>
        </header>
        <div className="card-grid">
          {pokemonList.map((pokemon, index) => {
              return <button key={index}
                             onClick={(e) => handleGame(e, pokemon)}>
                       <Card name={pokemon} 
                             key={index}/>
                     </button>
          })}
        </div>
    </>
  )
}

export default App
