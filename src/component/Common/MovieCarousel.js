import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const MovieCarousel = ({contentArr}) => {
  return (
    <section id="hero" class="binge-fm d-flex flex-column justify-content-center">
        <Carousel fade={false}>
        {contentArr.map((arr, index) => (
          <Carousel.Item key={index}>
          <div className='row'>
            {arr.map((movie, index) => (
                <div className='col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 p-4' key={index}>
                <img src={movie.smallPoster} alt="First slide" />
              </div>
            ))}
          </div>
        </Carousel.Item> 
        ))}
        </Carousel>
      </section>
  )
}

export default MovieCarousel
