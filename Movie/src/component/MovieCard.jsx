import react from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/actions/movieActions';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{movie.title}</h3>
      <button onClick={() => dispatch(addMovie(movie))}>Add to Watchlist</button>
    </div>
  );
};

export default MovieCard;
