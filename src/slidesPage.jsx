import forwardBtn from "./media/forwardBtn.svg";
import { useState, useEffect } from "react";
import backwardBtn from "./media/backwardBtn.svg";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// importing images
import schedule from "./media/icons/schedule.svg";
import meal from "./media/icons/meal.svg";
import sandwich from "./media/icons/sandwich.svg";
import weight from "./media/icons/weight.svg";
import calcium from "./media/icons/calcium.svg";
import iron from "./media/icons/bloodCells.svg";
import vegan from "./media/icons/vegan.svg";
import fruitsVegies from "./media/icons/fruitsVegies.svg";
import water from "./media/icons/water.svg";

const SlidesPage = () => {
  const navigate = useNavigate();
  const [slidesInfo, setSlidesInfo] = useState([]);
  const slideImages = {
    schedule: schedule,
    "big-meals": meal,
    "inbetween-meals": sandwich,
    "gaining-weight": weight,
    calcium: calcium,
    iron: iron,
    vegan: vegan,
    "vegies-fruits": fruitsVegies,
    water: water,
  };

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setSlidesInfo(data["diet"]);
        console.log(slidesInfo);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleForward = () => {
    navigate("/slides-page");
  };

  const handleBackward = () => {
    navigate(-1);
  };

  return (
    <div className="slides-page-content">
      <div className="slider-content">
        {/* Navigation buttons */}
        <button className="swiper-button-prev-custom"></button>
        <button className="swiper-button-next-custom"></button>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="slides"
        >
          {slidesInfo.map((slide) => (
            <SwiperSlide>
              <div className="slide" key={slide.id}>
                <div className="slide-title">{slide.title}</div>
                <div className="slide-text">{slide.text}</div>
                <div className="bottom-slide">
                  <img
                    src={slideImages[slide.id]}
                    className="slide-icon"
                    key={slide.id}
                  />
                  <div className="page-number">{slide.page}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* buttons */}
      <div className="buttons-move">
        <img
          src={forwardBtn}
          alt="continue"
          onClick={handleForward}
          className="move-button"
          id="forward-btn"
        />

        <img
          src={backwardBtn}
          alt="continue"
          onClick={handleBackward}
          className="move-button"
          id="backward-btn"
        />
      </div>
    </div>
  );
};

export default SlidesPage;
