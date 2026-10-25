import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import LOGO from '../images/LOGO.png'
import ThemeIdentifier from './ThemeIdentifier';
import Signup from './pages/userPage/Signup';
import Login from './pages/userPage/Login';

const Header = () => {

  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const [activeLink, setActiveLink] = useState(localStorage.getItem("active-nav"));

  const [signupShow, setSignupShow] = useState(false);

  const [loginShow, setLoginShow] = useState(false);

  const handleNavLinkClick = (link) => {
    localStorage.setItem("active-nav", link);
    setActiveLink(link);
  };

  const openSignupModal = (action) => {
    setSignupShow(action);
    setLoginShow(!action);
  }

  const openLoginModal = (action) => {
    setLoginShow(action);
    setSignupShow(!action);
  }

  const closeModal = () => {
    setLoginShow(false);
    setSignupShow(false);
  }

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("active-nav");
    localStorage.removeItem("binge-user-data");

    window.location.href ="/";
  }

  return (
    <Row className='binge-header'>
      <Signup show={signupShow} loginModal={openLoginModal} closeModal={closeModal}></Signup>
      <Login show={loginShow} signupModal={openSignupModal} closeModal={closeModal}></Login>
      <header id="header" class="fixed-top ">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="d-flex align-items-center justify-content-between">
              <img src={LOGO} className='binge-logo' alt='logo' />
              <nav id="navbar" class="navbar order-lg-0">
                <ul>

                  <li><a class={`nav-link scrollto ${activeLink === 'home' ? 'active' : ''}`} href="/home"
                    onClick={() => handleNavLinkClick('home')}>Home</a></li>

                  <li><a class={`nav-link scrollto ${activeLink === 'movies' ? 'active' : ''}`} href="/movies"
                    onClick={() => handleNavLinkClick('movies')}>Movies</a></li>

                  <li><a class={`nav-link scrollto ${activeLink === 'tv-series' ? 'active' : ''}`} href="/tv-series"
                    onClick={() => handleNavLinkClick('tv-series')}>TV Series</a></li>

                  {isAuthenticated ?
                    <>
                      <li><a class={`nav-link scrollto cursor-pointer ${activeLink === 'dashboard' ? 'active' : ''}`} href='/dashboard'
                        onClick={() => handleNavLinkClick('dashboard')}>Dashboard</a></li>

                      <li><a class="nav-link scrollto cursor-pointer"
                        onClick={() => { logout() }}>Logout</a></li>
                    </>
                    : <>
                      <li><a class={`nav-link scrollto cursor-pointer ${activeLink === 'sign-up' ? 'active' : ''}`}
                        onClick={() => { handleNavLinkClick('sign-up'); openSignupModal(true) }}>Signup</a></li>

                      <li><a class={`nav-link scrollto cursor-pointer ${activeLink === 'login' ? 'active' : ''}`}
                        onClick={() => { handleNavLinkClick('login'); openLoginModal(true) }}>Login</a></li>
                    </>
                  }
                </ul>
              </nav>
              <div>
                <ThemeIdentifier></ThemeIdentifier>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Row>
  )
}

export default Header
