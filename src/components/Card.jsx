import PropTypes from 'prop-types';

function Card({name, id}) {
  const src = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;

  return (
    <div className='card'>
      <p className="title">{name}</p>
      <div className='imgContainer'>
        <img src={src} alt={name} />
      </div>
    </div>
  )
}

export default Card

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};