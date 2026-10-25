import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TvShow from './pages/tvShowsPage/TvShow';
import Movies from './pages/moviePage/Movies';
import Home from './pages/homePage/Home';
import Details from './pages/detailPage/Details';
import Dashboard from './pages/userPage/Dashboard';


const Body = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/tv-series" element={<TvShow />} />
                    <Route path="/individual/:id" element={<Details />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Body