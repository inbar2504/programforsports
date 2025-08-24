import { useState, useEffect } from "react";
import forwardBtn from "../media/forwardBtn.svg";
import backwardBtn from "../media/backwardBtn.svg";
import { useNavigate } from "react-router-dom";
import homeBtn from "../media/homeBtn.svg";
import actualSchooLogo from "../media/school.svg";

const RunningProgramWeeks = () => {
  const navigate = useNavigate();
  const [weeksPrograms, setWeeksPrograms] = useState([]);
  const [weeksPage, setWeeksPage] = useState(true);
  const [chooseProgramPage, setChooseProgramPage] = useState(false);
  const [chosenWeek, setChosenWeek] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setWeeksPrograms(data["running-program"]);
        console.log("Fetched data:", data["running-program"]); // log here
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  const handleForward = () => {
    console.log("next");
  };

  const handleBackward = () => {
    if (chooseProgramPage) {
      setWeeksPage(true);
      setChooseProgramPage(false);
    } else {
      navigate("/running-program");
    }
  };

  return (
    <div className="running-all-weeks">
      {/* choosing week */}
      {weeksPage && (
        <div className="programs-page-content">
          <div className="weeks-page-header">
            <div className="text page-title">תוכנית אימונים ריצה</div>
            <div className="text small-message">לחץ לפירוט</div>
          </div>
          <div className="all-weeks">
            {weeksPrograms.map((week) => {
              return (
                <div
                  className="program-sports"
                  key={week.week}
                  onClick={() => {
                    setChosenWeek(week);
                    setWeeksPage(false);
                    setChooseProgramPage(true);
                  }}
                >
                  <p className="program-text">{week.week}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {chooseProgramPage && (
        <div className="choosing-program-page">
          <div className="choosing-programs-header">
            <div className="page-header running-header">
              <div className="text page-title">תוכנית אימונים ריצה</div>
              <div className="text small-message">{chosenWeek.week}</div>
            </div>
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
          alt="continue"
          onClick={handleForward}
          className="move-button"
          id="forward-btn"
          style={{ visibility: "hidden" }}
        />
        <img
          src={backwardBtn}
          alt="back"
          onClick={handleBackward}
          className="move-button"
          id="backward-btn"
        />
      </div>
    </div>
  );
};

export default RunningProgramWeeks;
