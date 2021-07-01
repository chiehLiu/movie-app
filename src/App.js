import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(APIURL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetch(SEARCHAPI + searchTerm)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setMovies(data.results);
        });
      setSearchTerm('');
    }

  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input type="search" className="search" placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">

        {movies && movies.map((movie) => <Movie {...movie} key={movie.id} />
        )}
      </div>
    </div>
  );
}

export default App;
