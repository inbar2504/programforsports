import { useEffect, useState } from "react";
// comstant navigation btns
import forwardBtn from "../media/forwardBtn.svg";
import backwardBtn from "../media/backwardBtn.svg";
import closeBtn from "../media/close.svg";
import actualSchooLogo from "../media/school.svg";
import homeBtn from "../media/homeBtn.svg";
import { useNavigate } from "react-router-dom";

const FootStability = () => {
  const [exercises, setExercises] = useState([]);
  const [currExercise, setCurrExercise] = useState(0);
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();
  const [harderDifficulty, setHarderDifficulty] = useState(false);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setExercises(data["foot-stability"]);
        console.log("Fetched data:", data["foot-stability"]);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleForward = () => {
    setCurrExercise(currExercise + 1);
    setHarderDifficulty(false);
  };

  const handleBackwards = () => {
    if (currExercise === 0) {
      navigate("/stability-exercises");
      setHarderDifficulty(false);
    } else {
      setCurrExercise(currExercise - 1);
      setHarderDifficulty(false);
    }
  };

  return (
    <div className="lower-back-stability-content">
      {exercises.length > 0 ? (
        <>
          <div className="stability-page-header">
            <div className="text stability-page-title">
              שיפור תפקוד הקרסול, שוק וכף הרגל
            </div>
          </div>
          <div className="page-middle">
            <div className="text page-title">
              {harderDifficulty
                ? exercises[currExercise]["exercise-number"][1]
                : exercises[currExercise]["exercise-number"][0]}
            </div>
            <div className="text stability-text">
              <div className="exercise-number">
                {exercises[currExercise]["repeating-exercise"][0]}
              </div>
              <div className="text page-title">
                {currExercise === 4
                  ? "שניות"
                  : currExercise === 6
                  ? "בצע עד שתחוש בעייפות"
                  : currExercise === 7
                  ? "מטרים"
                  : "חזרות"}
              </div>
            </div>
            <div className="text stability-text">
              <div className="exercise-number">
                {exercises[currExercise]["sets-number"][0]}
              </div>
              <div
                className="text page-title"
                style={{
                  visibility: currExercise === 6 ? "hidden" : "visible",
                }}
              >
                סטים
              </div>
            </div>
            <iframe
              width="250px"
              height="250px"
              src={
                harderDifficulty
                  ? exercises[currExercise]["video"][1]
                  : exercises[currExercise]["video"][0]
              }
              allow="autoplay; fullscreen"
              className="stability-video"
              allowFullScreen
            ></iframe>
            <button
              className="text link-text"
              onClick={() => {
                setPopup(true);
              }}
              disabled={popup}
            >
              לחצו כאן עבור הנחיות לביצוע התרגיל
            </button>
            <button
              className="stability-button"
              onClick={() => {
                if (harderDifficulty) {
                  setHarderDifficulty(false);
                } else {
                  setHarderDifficulty(true);
                }
              }}
              style={{
                visibility:
                  currExercise === 1
                    ? "visible"
                    : currExercise === 3
                    ? "visible"
                    : "hidden",
              }}
              disabled={popup}
            >
              {harderDifficulty
                ? "לרמת קושי בינונית לחצו"
                : "לרמת קושי גבוהה יותר לחצו"}
            </button>
          </div>
          {popup && (
            <div className="stability-overlay">
              <div className="stability-window">
                <img
                  src={closeBtn}
                  className="close-btn"
                  onClick={() => {
                    setPopup(false);
                  }}
                />
                <div className="text stability-text-popup">
                  {exercises[currExercise]["exercise-instructions"][0]}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="loading">טוען נתונים...</div> // fallback until data arrives
      )}

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
          if (popup) return;
          navigate("/stability-exercises");
        }}
      />

      <div className="buttons-move">
        <img
          src={forwardBtn}
          onClick={() => {
            if (popup) return;
            handleBackwards();
          }}
          alt="back"
          className="move-button"
          id="forward-btn"
        />
        <img
          src={backwardBtn}
          onClick={() => {
            if (popup) return;
            handleForward();
          }}
          alt="next"
          className="move-button"
          id="backward-btn"
          style={{ visibility: currExercise === 7 ? "hidden" : "visible" }}
        />
      </div>
    </div>
  );
};

export default FootStability;
