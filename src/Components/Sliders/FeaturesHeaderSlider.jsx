/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Slider from 'react-slick';
import { ReactSVG } from 'react-svg';

const FeaturesHeaderSlider = ({ scrollWithOffset }) => {
  const features = [
    'Access Anywhere',
    'Mac Control',
    'Unlock Options',
    'Lock Settings',
    'Apple Watch',
    'Authentication',
    'Music',
    'Find your iPhone',
    'BlueTooth LE',
    'Retina Graphics',
    'Security',
    'Localizations',
  ];

  const arrowStyles = {
    position: 'absolute',
    background: 'url(./arrow.png) no-repeat',
    top: '35%',
    width: '18px',
    height: '52px',
    cursor: 'pointer',
    border: 'none',
    outline: '0',
  };

  const SampleNextArrow = ({ onClick }) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      style={{
        ...arrowStyles,
        right: '-25px',
        transform: 'translate(0, -50%) rotate(180deg)',
      }}
      onClick={onClick}
    />
  );

  const SamplePrevArrow = ({ onClick }) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      style={{
        ...arrowStyles,
        left: '-25px',
        transform: 'translate(0, -50%)',
      }}
      onClick={onClick}
    />
  );

  return (
    <Slider
      className="mt-5"
      dots
      infinite={false}
      speed={500}
      slidesToShow={6}
      slidesToScroll={6}
      initialSlide={0}
      nextArrow={<SampleNextArrow />}
      prevArrow={<SamplePrevArrow />}
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ]}
    >
      {features.map((feature, index) => (
        <Link
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          smooth
          to={`#${feature.replaceAll(' ', '-').toLowerCase()}`}
          scroll={(el) => scrollWithOffset(el)}
          className="featureHeaderSlider__item"
        >
          <ReactSVG
            src={`/feature/icons/${feature.replaceAll(' ', '_').toLowerCase()}_icon.svg`}
            className="featureHeaderSlider__icon"
          />
          {feature}
        </Link>
      ))}
    </Slider>
  );
};

export default FeaturesHeaderSlider;
