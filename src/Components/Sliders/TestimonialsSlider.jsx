import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

function TestimonialsSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const data = [
    "I’ve been using the app all morning, and it has worked flawlessly! - <a href='http://www.mactrast.com/2016/04/lock-unlock-mac-automatically-near-lock-free-next-days/'>MacTrast</a>",
    "Near Lock experience is great, I just take iPhone with me and leave while my Mac automatically locks. - <a href='https://www.appinn.com/nearlock/'>Appinn</a>",
    "If you are worried that just being able to walk up to your Mac with your iPhone is a little insecure then the iOS app can be setup to require Touch ID authentication before it will unlock, which is a nice but still convenient way of accessing your Mac. - <a href='http://ukmac.net/2016/04/near-lock-unlock-mac-iphone-apple-watch/'>UKMac.net</a>",
    "If you have an iPhone 5S or newer you can even use your iPhone’s Touch ID to unlock your Mac. Using your own fingerprint to unlock your computer? Doesn’t get much more secure than that. - <a href='https://test.guidingtech.com/38482/unlock-mac-iphone/'>Guiding Tech</a>"
  ];

  const images = ["mactrast.jpg", "appinn.png", "ukmac.png", "guidingtech.svg"];

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  return (
    <>
      <Slider
        asNavFor={nav1}
        ref={(slider) => setSlider2(slider, [slider])}
        slidesToShow={3}
        autoplay={true}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {images.map((item, index) => (
          <div key={index}>
            <img src={item} alt="" />
          </div>
        ))}
      </Slider>
      <Slider asNavFor={nav2} ref={(slider) => setSlider1(slider, [slider])}>
        {data.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Slider>
    </>
  );
}

export default TestimonialsSlider;
