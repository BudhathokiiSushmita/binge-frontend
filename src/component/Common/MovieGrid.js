import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieGrid = ({ contentArr, category }) => {

  const navigate = useNavigate("");

  const goToPage = (movie) => {
    navigate(`/individual/${movie.id}`);
  }

  return (
    <div>
      <br></br>
      <div className='row'>
        {contentArr.map((movie, index) => (
          <div className='col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3 col-xxl-2 p-2' key={index}>
            <img src={movie.smallPoster} alt="First slide" onClick={() => goToPage(movie)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieGrid
