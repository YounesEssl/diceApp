import React from 'react';
import bannerImg from "../images/banner.png";
import './Banner.css';
import Menu from './Menu';
function Banner({text}) {
  return (
    <>
    <div className='menu-in-banner'>
    <Menu />
    </div>
    <div className="banner-wrapper">

      <img className="banner-img" src={bannerImg} alt="Banner" />
      <div className="banner-text-container">
        <div className="banner-text">{text}</div>
      </div>
    </div>
    </>
  );
}

export default Banner;
