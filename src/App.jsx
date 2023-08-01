import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

const pokemons = ['pikachu', 'Charizard', 'Mewtwo', 'Eevee'];

function App() {
  const [pokemon, setPokemon] = useState({name: '', id: 0})

  const fetchPokemonData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPokemon({name: data.name, id: data.id})
      })
  }

  useEffect(() => {
    fetchPokemonData()
  }, [])

  return (
    <>
      <Card name={pokemon.name}
              id={pokemon.id} />
    </>
  )
}

export default App
