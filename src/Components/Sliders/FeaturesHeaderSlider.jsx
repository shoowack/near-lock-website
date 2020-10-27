import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Slider from "react-slick";
import "./slick.scss";
import "./slick-theme.scss";
import "./features-header-slider.scss";

function FeaturesHeaderSlider({ scrollWithOffset }) {
  const features = [
    "Access Anywhere",
    "Mac Control",
    "Unlock Options",
    "Lock Settings",
    "Apple Watch",
    "Authentication",
    "Music",
    "BlueTooth LE",
    "Retina Graphics",
    "Security"
  ];

  return (
    <Slider
      className="mt-5"
      dots
      infinite={false}
      speed={500}
      slidesToShow={6}
      slidesToScroll={6}
      initialSlide={0}
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]}
    >
      {features.map((feature, index) => {
        return (
          <Link
            key={index}
            smooth
            to={`#${feature.replaceAll(" ", "-").toLowerCase()}`}
            scroll={(el) => scrollWithOffset(el)}
            className="featureHeaderSlider__item"
          >
            <img
              src={`/feature/icons/${feature
                .replaceAll(" ", "_")
                .toLowerCase()}_icon.svg`}
              alt=""
            />
            {feature}
          </Link>
        );
      })}
    </Slider>
  );
}

export default FeaturesHeaderSlider;
