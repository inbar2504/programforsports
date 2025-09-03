import { useState, useEffect } from "react";
import forwardBtn from "../media/forwardBtn.svg";
import backwardBtn from "../media/backwardBtn.svg";
import { useNavigate } from "react-router-dom";
import homeBtn from "../media/homeBtn.svg";
import actualSchooLogo from "../media/school.svg";

const PowerExercisesWeeks = () => {
  const [weeksPage, setWeeksPage] = useState(true);
  const navigate = useNavigate();
  const [powerExercises, setPowerExcercises] = useState([]);
  const [chosenWeek, setChosenWeek] = useState("");
  const [chooseExercisePage, setChooseExercisePage] = useState(false);
  const [exercisesPage, setExercisesPage] = useState(false);
  const [chosenExercise, setChosenExercise] = useState([]);
  sessionStorage.setItem("powerExercisesPageBack", 'true');

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setPowerExcercises(data["power-exercises"]);
        console.log("Fetched data:", data["power-exercises"]);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleBackward = () => {
    if (weeksPage) {
      navigate("/power-exercies-start");
    } else if (chooseExercisePage){
      setChooseExercisePage(false);
      setWeeksPage(true);
    } else if (exercisesPage) {
      setExercisesPage(false);
      setChooseExercisePage(true);
    }
  }

  return (
    <div className="power-all-weeks">
      {weeksPage && (
        <div className="programs-page-content">
          <div className="weeks-page-header">
            <div className="text page-title">תוכנית אימונים כוח</div>
          </div>
          <div className="all-weeks">
            {powerExercises.map((week) => {
              return (
                <div
                  className="week-select-power"
                  key={week.week}
                  onClick={() => {
                    setChosenWeek(week);
                    setWeeksPage(false);
                    setChooseExercisePage(true);
                  }}
                >
                  <p className="program-text-power-week">{week.week}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {chooseExercisePage && (
        <div className="choose-exercise-page">
          <div className="choosing-programs-header">
            <div className="running-header">
              <div className="text page-title">{chosenWeek.week}</div>
              <div className="text small-message">לחץ לפירוט</div>
            </div>
            <div className="program-buttons">
              <button
                className="running-popup"
                onClick={() => {
                  setChooseExercisePage(false);
                  setExercisesPage(true);
                  setChosenExercise(
                    chosenWeek["all-exercises"][0]
                  );
                  console.log(chosenWeek["all-exercises"][0]["exercises"]);
                }}
              >
                {chosenWeek["all-exercises"][0]["exercise-number"]}
              </button>
              <button
                className="running-popup"
                onClick={() => {
                  setChooseExercisePage(false);
                  setExercisesPage(true);
                  setChosenExercise(
                    chosenWeek["all-exercises"][1]
                  );
                  console.log(chosenWeek["all-exercises"][1]["exercises"]);
                }}
              >
                {chosenWeek["all-exercises"][1]["exercise-number"]}
              </button>
              <button
                className="running-popup"
                onClick={() => {
                  setChooseExercisePage(false);
                  setExercisesPage(true);
                  setChosenExercise(
                    chosenWeek["all-exercises"][2]
                  );
                  console.log(chosenWeek["all-exercises"][2]["exercises"]);
                }}
              >
                {chosenWeek["all-exercises"][2]["exercise-number"]}
              </button>
            </div>
          </div>
        </div>
      )}
      {exercisesPage && (
        <div className="exercise-page-content">
          <div className="choosing-programs-header">
            <div className="power-exercises-header">
              <div className="text page-title">{chosenExercise["exercise-number"]}</div>
            </div>
            <ul className="exercises-list">
              {chosenExercise["exercises"].map((exercise) => (
                <li >
                  <div className="text exercise-name">{exercise["exercise-title"]}</div>
                  <div className="text exercise-notes">{exercise["exercise-notes"]}</div>

                  </li>
              ))}
            </ul>
          </div>
        </div>
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
                  navigate("/start-programs");
                }}
              />
              <div className="buttons-move">
                <img
                  src={forwardBtn}
                  onClick={handleBackward}
                  alt="continue"
                  className="move-button"
                  id="forward-btn"
                />
                <img
                  src={backwardBtn}
                  alt="back"
                  style={{ visibility: "hidden" }}
                  className="move-button"
                  id="backward-btn"
                />
              </div>
    </div>
  );
};

export default PowerExercisesWeeks;
