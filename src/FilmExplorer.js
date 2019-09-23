import React, { useState, useEffect } from 'react';
import { List } from 'immutable';

import filmData from './films.json';
import FilmTableContainer from './components/FilmTableContainer';
import SearchBar from './components/SearchBar';



function FilmExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('title');
  const [films, setFilms] = useState(List());

  // load the film data
  useEffect(()=>{
    setFilms(List(filmData));
  }, []);

  // change the rating of a film
  const setRating = (filmid, rating) => {
    const alteredFilms = films.map((film) => {
      if (film.id === filmid) {
        return { ...film, rating };
      }
      return film;
    });
    setFilms(alteredFilms);
  };

  const mainContents = films.size === 0 ? (<h2>Loading...</h2>) :
    (<FilmTableContainer
        searchTerm={searchTerm}
        films={films}
        sortType={sortType}
        setRatingFor={setRating}
      />);
    
  return (
    <div className="FilmExplorer">
      <SearchBar
        searchTerm={searchTerm}
        setTerm={setSearchTerm}
        sortType={sortType}
        setType={setSortType}
      />
      {mainContents}
    </div>
  );
}


export default FilmExplorer;
