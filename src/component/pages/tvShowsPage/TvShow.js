import React, { useState, useEffect } from 'react'
import MovieGrid from '../../Common/MovieGrid';
import { getAllContentsByType, getAllContentsByTypeAndSearch } from '../../../service/ContentService';

const TvShow = () => {
  const [tvShows, setTvshows] = useState([]);

  const fetchAllContent = async () => {
    const data = await getAllContentsByType("tvshow");
    setTvshows(data.body);
  };

  const fetchAllContentBySearch = async (value) => {
    if(value) {
    const data = await getAllContentsByTypeAndSearch("tvshow", value);
    setTvshows(data.body);
    } else {
      fetchAllContent();
    }
  };

  useEffect(() => {
    fetchAllContent();
  }, []);

  return (
    <>
      <div className='binge-fm binge-movie-page'>
        <p className='binge-title'>Tv Show <b className='binge-text'> BINGE</b></p>
        <div className='row d-flex justify-content-center'>
          <div className='col-sm-12 col-lg-4 col-md-4'>
            <div class="form-group">
              <label class="form-control-label">Search</label>
              <input type="name" id="name" name="name" placeholder="Name" class="form-control" required
              onChange={(event) => {
                fetchAllContentBySearch(event.target.value)
              }}
              />
            </div>
          </div>
        </div>
        <MovieGrid contentArr= {tvShows} category={"tvshow"}></MovieGrid>
      </div>
    </>
  )
}

export default TvShow
