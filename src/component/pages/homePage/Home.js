import React from 'react'
import HeroMovies from './HeroMovies'
import FeaturedMovie from './FeaturedMovie'
import FeaturedTvShows from './FeaturedTvShows'
import ContentSection from './ContentSection'

const Home = () => {
  return (
    <div>
            <HeroMovies></HeroMovies>
            <FeaturedMovie></FeaturedMovie>
            <FeaturedTvShows></FeaturedTvShows>
            <ContentSection></ContentSection>
    </div>
  )
}

export default Home
