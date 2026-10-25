import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

  const linkedIn = "https://www.linkedin.com/in/sushmita-b-023423220/";

  return (
    <footer class="footer-section">
      <div class="relative">
        <div class="row g-5 mb-5">
          <div class="col-lg-4 col-12">
            <div class="mb-4 footer-logo-wrap"><a href="/" class="footer-logo">Binge</a></div>
            <p class="mb-4">Experience endless entertainment with <span className='binge-text'>Binge</span>, where every story captivates
              and every moment counts. Discover your next favorite movie or series today</p>
          </div>
          <div class="col-lg-4 col-6 d-flex justify-content-center">
            <ul class="list-unstyled custom-social">
              <p className='binge-text'>Social handles</p>
              <li><a href={linkedIn}><FaFacebook /></a></li>
              <li><a href={linkedIn}><FaInstagram /></a></li>
              <li><a href={linkedIn}><FaSquareXTwitter /></a></li>
              <li><a href={linkedIn}><FaLinkedin /></a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-6">
            <div class="row links-wrap float-end">
              <p className='binge-text'>Quick Links</p>
              <div class="col-12">
                <ul class="list-unstyled">
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Movies</a></li>
                  <li><a href="/">TV Series</a></li>
                  <li><a href="/">Signup</a></li>
                  <li><a href="/">Login</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div class="border-top copyright">
          <div class="row pt-4">
            <div class="col-lg-6">
              <p class="mb-2 text-center text-lg-start">Copyright &copy;2024 . All Rights Reserved. &mdash; Designed and Developed by
                <a href={linkedIn} className='binge-text'> SUSHMITA BUDHATHOKI</a>
              </p>
            </div>

            <div class="col-lg-6 text-center text-lg-end">
              <ul class="list-unstyled d-inline-flex ms-auto">
                <li class="me-4"><a href="/">Terms &amp; Conditions</a></li>
                <li><a href="/">Privacy Policy</a></li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
