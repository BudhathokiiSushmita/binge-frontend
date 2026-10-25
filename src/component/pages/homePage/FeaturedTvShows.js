import React, { useState, useEffect } from 'react'
import MovieCarousel from '../../Common/MovieCarousel';
import { getFeaturedContentByType } from '../../../service/ContentService';


const FeaturedTvShows = () => {
  const [tvShows, setTvshows] = useState([]);
  
  const fetchFeaturedContent = async () => {
    const data = await getFeaturedContentByType("tvshow");

    //modifying response
    const nestedArray = [];
    for (let i = 0; i < data.body.length; i += 6) {
        nestedArray.push(data.body.slice(i, i + 6));
    }
    setTvshows(nestedArray);
  };

useEffect(() => {
  fetchFeaturedContent();
}, []);

  return (
    <>
      <div>
        <p className='binge-title pt-4 ps-4'>Featured <b className='binge-text'>TV SHOWS</b></p>
      </div>
      <MovieCarousel contentArr={tvShows}></MovieCarousel>
    </>
  )
}

export default FeaturedTvShows
