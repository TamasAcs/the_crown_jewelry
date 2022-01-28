import React from "react";
import "./Slider.css";
import necklace from "../img/NeckLace.jpg"
import ring from "../img/ring3.jpg"
import watch from "../img/watch.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <Slider {...settings} className="imgSlider__carousel">
      <div className="imgSlider__wrap">
        <div className="imgSlider__wrapEach">
          <img src={necklace} alt="img" />
          <div className="img__info">
          <p className="img__title">DON'T COMPROMISE ON STYLE!</p>
          <p className="img__desc">get the style that lasts a lifetime</p>
          </div>
        </div>
      </div>
      <div className="imgSlider__wrap">
        <div className="imgSlider__wrapEach">
          <img src={ring} alt="img" />
          <div className="img__info">
          <p className="img__title">DIAMONDS</p>
          <p className="img__desc">are best girl's friends</p>
          </div>
        </div>
      </div>
      <div className="imgSlider__wrap">
        <div className="imgSlider__wrapEach">
          <img src={watch} alt="img" />
          <div className="img__info">
          <p className="img__title">OMEGA</p>
          <p className="img__desc">master chronometer certified</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default ImgSlider;