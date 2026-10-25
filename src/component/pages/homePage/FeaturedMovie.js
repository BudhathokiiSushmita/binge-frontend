import React, { useState, useEffect } from 'react'
import MovieCarousel from '../../Common/MovieCarousel';
import { getFeaturedContentByType } from '../../../service/ContentService';

const FeaturedMovie = () => {

  const [movies, setMovie] = useState([]);

  const fetchFeaturedContent = async () => {
      const data = await getFeaturedContentByType("movie");

      //modifying response
      const nestedArray = [];
      for (let i = 0; i < data.body.length; i += 6) {
          nestedArray.push(data.body.slice(i, i + 6));
      }
      setMovie(nestedArray);
    };

  useEffect(() => {
    fetchFeaturedContent();
  }, []);

  return (
    <>
      <div>
        <p className='binge-title pt-4 ps-4'>Featured <b className='binge-text'>MOVIES</b></p>
      </div>
      <MovieCarousel contentArr={movies}></MovieCarousel>
    </>
  )
}

export default FeaturedMovie
