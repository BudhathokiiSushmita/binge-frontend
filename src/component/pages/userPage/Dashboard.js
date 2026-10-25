import React from 'react';
import Home from '../../../images/Home.png';
import Movies from '../../../images/Movies.png';
import Tvshow from '../../../images/Tvshow.png';

const Dashboard = () => {

  const navigateThrough = (link) => {
    localStorage.setItem("active-nav", link);
    const currentSegment = window.location.href.split("/").pop();
    window.location.href = link;
  }


  const userData = JSON.parse(localStorage.getItem("binge-user-data"));

  return (
    <>
      <div className='binge-movie-page'>
        <div class="container pt-5">
          <div class="row justify-content-center cursor-pointer">
            <div class="col-12 col-sm-6 col-lg-3" onClick={() => navigateThrough("home")}>
              <div className="single_advisor_profile wow fadeInUp animated-element" data-wow-delay="0.2s">
                <div class="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                  <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
                </div>
                <div class="single_advisor_details_info">
                  <h6>{userData.email}</h6>
                  <p> {userData.firstName} {userData.lastName}</p>
                </div>
              </div>
            </div>


            {/* right content */}
            <div class="col-12 col-sm-6 col-lg-9">
              <div class="row justify-content-center cursor-pointer" >
                <div class="col-12 col-sm-12 col-lg-3" onClick={() => navigateThrough("home")}>
                  <div className="single_advisor_profile wow fadeInUp animated-element profile" data-wow-delay="0.2s">
                    <div class="advisor_thumb">
                      <img src={Home} alt="" />
                    </div>
                    <div class="single_advisor_details_info">
                      <h6>Home</h6>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3" onClick={() => navigateThrough("movies")}>
                  <div className="single_advisor_profile wow fadeInUp animated-element" data-wow-delay="0.2s">
                    <div class="advisor_thumb">
                      <img src={Movies} alt="" />
                    </div>
                    <div class="single_advisor_details_info">
                      <h6>Movies</h6>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3" onClick={() => navigateThrough("tv-series")}>
                  <div className="single_advisor_profile wow fadeInUp animated-element" data-wow-delay="0.2s">
                    <div class="advisor_thumb">
                      <img src={Tvshow} alt="" />
                    </div>
                    <div class="single_advisor_details_info">
                      <h6>Tv Shows</h6>
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Dashboard
