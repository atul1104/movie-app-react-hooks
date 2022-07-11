import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context';

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie.map((currentMovie) => {
            const { imdbID, Title, Poster } = currentMovie;
            const movieName = Title.substring(0, 16);
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>
                      {movieName.length >= 16 ? `${movieName}...` : movieName}
                    </h2>
                    <img src={Poster} alt={Title} />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
