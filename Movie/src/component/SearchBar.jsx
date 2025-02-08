import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ setMovies }) => {
  const [query, setQuery] = useState('');
  const searchMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}`);
    setMovies(res.data.results);
  };
  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movies..." />
      <button onClick={searchMovies}>Search</button>
    </div>
  );
};

export default SearchBar;
