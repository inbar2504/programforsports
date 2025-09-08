import { useState, useEffect } from "react";
import forwardBtn from "../media/forwardBtn.svg";
import backwardBtn from "../media/backwardBtn.svg";
import { useNavigate } from "react-router-dom";
import homeBtn from "../media/homeBtn.svg";
import actualSchooLogo from "../media/school.svg";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const PowerExerciesStart = () => {
  const [powerExercisesNotes, setPowerExcercisesNotes] = useState([]);
  const [videosSlides, setVideoSlides] = useState(false);
  const [slidesInfo, setSlidesInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setPowerExcercisesNotes(data["powerExerciesNotes"]);
        setSlidesInfo(data["power-exercises-videos"]);
        console.log("Fetched data:", data["powerExerciesNotes"]);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  useEffect(() => {
    const backFlag = sessionStorage.getItem("powerExercisesPageBack");

    if (backFlag === "true") {
      setVideoSlides(true); // or whatever state should be triggered
      sessionStorage.removeItem("powerExercisesPageBack"); // clear it so it won’t trigger again
    }
  }, []);

  return (
    <div className="power-exercises-start-content">
      {videosSlides && (
        <div className="power-content">
          {/* Page header goes here */}
          <div className="page-header-power-exercises">
            <div className="text page-title">תוכנית אימוני כוח</div>
            <div className="text small-message">צפה בתרגילים</div>
          </div>

          {/* Slider section */}
          <div className="slides-page">
            <button className="swiper-button-prev-custom power-arrow-prev"></button>
            <button className="swiper-button-next-custom power-arrow-next"></button>

            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              spaceBetween={30}
              slidesPerView={1}
              className="slides slides-power"
            >
              {slidesInfo.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="slide-power">
                    <div className="slide-title-power">{slide.title}</div>
                    <iframe
                      width="250px"
                      height="250px"
                      src={slide.link}
                      title={slide.title}
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    ></iframe>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <div
        className="first-page"
        style={{ display: videosSlides ? "none" : "block" }}
      >
        <div className="page-header-power-exercises">
          <div className="text page-title">תוכנית אימונים כוח</div>
          <div className="text small-message">דגשים</div>
        </div>
        <div className="page-middle">
          <ul className="power-exercises-notes">
            {powerExercisesNotes.map((note) => (
              <li className="text" key={note.id}>
                {note.text}
              </li>
            ))}
          </ul>
          <a className="text" href="https://docs.google.com/spreadsheets/d/1Qz5ZOze7Ab064SUlp96yw597QwQDtEKFttmqMwjJHPY/copy">לטבלת חישוב תוצאות</a>
        </div>
      </div>

      {/* school log */}
      <img
        src={actualSchooLogo}
        alt="schoolLogo"
        className="logo"
        id="school-logo"
      />
      {/* home button */}
      <img
        src={homeBtn}
        className="home-btn"
        onClick={() => {
          navigate("/start-programs");
        }}
      />
      <div className="buttons-move">
        <img
          src={forwardBtn}
          onClick={() => {
            if (videosSlides) {
              setVideoSlides(false);
            } else {
              navigate("/start-programs");
            }
          }}
          alt="continue"
          className="move-button"
          id="forward-btn"
        />
        <img
          src={backwardBtn}
          alt="back"
          onClick={() => {
            if (!videosSlides) {
              setVideoSlides(true);
            } else {
              navigate("/power-exercises-weeks");
            }
          }}
          className="move-button"
          id="backward-btn"
        />
      </div>
    </div>
  );
};

export default PowerExerciesStart;
