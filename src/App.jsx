import './App.css'
import Card from './components/Card'

const pokemons = ['pikachu', 'charizard', 'mewtwo', 'eevee'];

function App() {
  
  return (
    <>
      {
        <div>
          {pokemons.map((pokemon, index) => {
              return <div key={index}>
                       <Card name={pokemon} />
                       <p>{pokemon}</p>
                     </div>
          })}
        </div>
      }
    </>
  )
}

export default App
