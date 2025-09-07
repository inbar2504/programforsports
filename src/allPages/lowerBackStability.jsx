import { useEffect, useState } from "react";
// comstant navigation btns
import forwardBtn from "../media/forwardBtn.svg";
import backwardBtn from "../media/backwardBtn.svg";
import closeBtn from "../media/close.svg";
import actualSchooLogo from "../media/school.svg";
import homeBtn from "../media/homeBtn.svg";
import { useNavigate } from "react-router-dom";

const LowerBackStability = () => {
  const [exercises, setExercises] = useState([]);
  const [currExercise, setCurrExercise] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setExercises(data["lower-back-stability"]);
        console.log("Fetched data:", data["lower-back-stability"]);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleForward = () => {
    setCurrExercise(currExercise+1);
  }

    const handleBackwards = () => {
        if (currExercise === 0 ){
            navigate("/stability-exercises");
        } else {
            setCurrExercise(currExercise-1);
        }
    }  
  return (
    <div className="lower-back-stability-content">
      {exercises.length > 0 ? (
        <>
          <div className="stability-page-header">
            <div className="text stability-page-title">
              שיפור תפקוד גב תחתון
            </div>
          </div>
          <div className="page-middle">
            <div className="text page-title">
              {exercises[currExercise]["exercise-number"][0]}
            </div>
            <div className="text stability-text">
              <div className="exercise-number">
                {exercises[currExercise]["repeating-exercise"][0]}
              </div>
              <div className="text page-title">{currExercise === 2 ? "שניות": currExercise === 4 ? "דקה": "חזרות"}</div>
            </div>
            <div className="text stability-text">
              <div className="exercise-number">
                {exercises[currExercise]["sets-number"][0]}
              </div>
              <div className="text page-title">סטים</div>
            </div>
            <iframe
              width="250px"
              height="250px"
              src={exercises[currExercise]["video"][0]}
              allow="autoplay; fullscreen"
              className="stability-video"
              allowFullScreen
            ></iframe>
          </div>
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
        onClick={() => navigate("/start-programs")}
      />

      <div className="buttons-move">
        <img
          src={forwardBtn}
          onClick = {handleBackwards}
          alt="back"
          className="move-button"
          id="forward-btn"
        />
        <img
          src={backwardBtn}
          onClick = {handleForward}
          alt="next"
          className="move-button"
          id="backward-btn"
          style={{ visibility: currExercise === 4 ? "hidden" : "visible" }}
        />
      </div>
    </div>
  );
};

export default LowerBackStability;
