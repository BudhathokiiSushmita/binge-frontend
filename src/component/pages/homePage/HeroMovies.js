import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const HeroSec = () => {
  return (
    <section id="hero" class="binge-hero d-flex flex-column justify-content-center">
      <Carousel fade>
        <Carousel.Item>
          <img src="https://media.npr.org/assets/img/2016/10/26/cm-ss-00542_rs_20_wide-764d77b659bdc62277df63015e39041280c9c588.jpg" alt="Second slide"/>
          <Carousel.Caption>
            <h3>Dr. Stranger</h3>
            <p>Marvel Movie</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://wallpapers-clan.com/wp-content/uploads/2023/11/marvel-iron-man-in-destroyed-suit-desktop-wallpaper-preview.jpg" alt="First slide"/>
          <Carousel.Caption>
            <h3>Iron Man</h3>
            <p>Blockbuster movie of all time</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.bauerhosting.com/legacy/empire-images/reviews_films/5829f535737b36a41846433e/Your%20Name.png?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80" alt="Third slide"/>
          <Carousel.Caption>
            <h3>Your name</h3>
            <p> Best animated movie 2021</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>

  )
}

export default HeroSec