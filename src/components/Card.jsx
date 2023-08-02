import PropTypes from 'prop-types';
import { useEffect, useState } from 'react'

function Card({name}) {
  const [pokemon, setPokemon] = useState({name: '', id: 0})

  const fetchPokemonData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPokemon({name: data.name, id: data.id})
      })
  }

  useEffect(() => {
    fetchPokemonData()
  })

  const src = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

  return (
    <div className='card'>
      <p className="title">{pokemon.name}</p>
      <div className='imgContainer'>
        <img src={src} alt={pokemon.name} />
      </div>
    </div>
  )
}

export default Card

Card.propTypes = {
  name: PropTypes.string.isRequired,
};