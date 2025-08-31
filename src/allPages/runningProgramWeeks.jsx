import { useState, useEffect } from "react";
import forwardBtn from "../media/forwardBtn.svg";
import backwardBtn from "../media/backwardBtn.svg";
import { useNavigate } from "react-router-dom";
import homeBtn from "../media/homeBtn.svg";
import actualSchooLogo from "../media/school.svg";
import timerNotClicked from "../media/icons/timer.svg";
import timerClicked from "../media/icons/timerclicked.svg";

const RunningProgramWeeks = () => {
  const navigate = useNavigate();

  //setting the users choices
  const [weeksPrograms, setWeeksPrograms] = useState([]);
  const [chosenWeek, setChosenWeek] = useState(null);
  const [chosenProgram, setChosenProgram] = useState(null);

  // different pages
  const [continuousRunPage, setContinuousRunPage] = useState(false);
  const [betterRunPage, setBetterRunPage] = useState(false);
  const [weeksPage, setWeeksPage] = useState(true);
  const [chooseProgramPage, setChooseProgramPage] = useState(false);
  const [tenthWeek, setTenthWeek] = useState(false);

  //timer consts
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [countUpStart, setCountUpStart] = useState(0);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setWeeksPrograms(data["running-program"]);
        console.log("Fetched data:", data["running-program"]);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  useEffect(() => {
    if (!chosenProgram || tenthWeek) return; // skip for tenthWeek

    setCurrentStep(0);
    if (Array.isArray(chosenProgram["program-timer"])) {
      setTimeLeft(chosenProgram["program-timer"][0] * 60);
    } else {
      setTimeLeft(chosenProgram["program-timer"] * 60);
    }

    setIsRunning(false);
  }, [chosenProgram, tenthWeek]);

  useEffect(() => {
    // Only run if a program is chosen
    if (!chosenProgram || tenthWeek) return;

    // If timeLeft is 0, don’t reset (finished)
    if (timeLeft === 0) return;

    // Otherwise, reset timer
    if (continuousRunPage === false && betterRunPage === false) {
      if (Array.isArray(chosenProgram["program-timer"])) {
        setTimeLeft(chosenProgram["program-timer"][currentStep] * 60);
      } else {
        setTimeLeft(chosenProgram["program-timer"] * 60);
      }
      setIsRunning(false);
    }
  }, [continuousRunPage, betterRunPage, chosenProgram, currentStep, timeLeft]);

  // When timer reaches 0, prepare next step
  useEffect(() => {
    if (!chosenProgram || tenthWeek) return;
    if (timeLeft > 0) return;
    if (currentStep === 0 && !isRunning) return;

    if (Array.isArray(chosenProgram["program-timer"])) {
      const steps = chosenProgram["program-timer"];

      if (currentStep < steps.length - 1) {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        setTimeLeft(steps[nextStep] * 60);
        setIsRunning(false); // user must click start again
      } else {
        setCurrentStep(steps.length - 1);
        setTimeLeft(0);
        setIsRunning(false); // fully finished
      }
    }
  }, [timeLeft, chosenProgram, currentStep, isRunning]);

  useEffect(() => {
    if (!isRunning) return; // only run when running

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev + 1); // count up
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]); // don't include timeLeft or tenthWeek here

  const handleBackward = () => {
    if (chooseProgramPage) {
      setWeeksPage(true);
      setChooseProgramPage(false);
    } else if (continuousRunPage) {
      setContinuousRunPage(false);
      setChooseProgramPage(true);
    } else if (betterRunPage) {
      setBetterRunPage(false);
      setChooseProgramPage(true);
    } else if (tenthWeek) {
      setTenthWeek(false);
      setChooseProgramPage(true);
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
                  className="week-select"
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
            <div className="running-header">
              <div className="text page-title">תוכנית אימונים ריצה</div>
              <div className="text small-message">{chosenWeek.week}</div>
            </div>
          </div>
          <div className="program-buttons ">
            <button
              className="running-popup"
              onClick={() => {
                if (chosenWeek.week === "שבוע 10") {
                  setTenthWeek(true);
                  setTimeLeft(0);
                  setChosenProgram(chosenWeek.runningPrograms[0]);
                  setChooseProgramPage(false);
                } else {
                  setChosenProgram(chosenWeek.runningPrograms[0]);
                  setContinuousRunPage(true);
                  setChooseProgramPage(false);
                }
              }}
            >
              {chosenWeek.runningPrograms[0].title}
            </button>

            <button
              className="running-popup"
              onClick={() => {
                setChosenProgram(chosenWeek.runningPrograms[1]);
                setBetterRunPage(true);
                setChooseProgramPage(false);
              }}
            >
              {chosenWeek.runningPrograms[1].title}
            </button>
          </div>
        </div>
      )}

      {tenthWeek && (
        <div className="continious-run-page">
          <div className="page-header">
            <div className="runing-program-week">{chosenWeek.week}</div>
            <div className="running-program-text">{chosenProgram.title}</div>
          </div>
          <div className="page-middle">
            <div className="text">{chosenProgram["program-details"]}</div>
            <button
              
              className="running-timer-button"
              onClick={() => {
                if (isRunning){
                  setIsRunning(false);
                } else {
                setIsRunning(true);
                }
              }}
              style={{ backgroundColor: isRunning ? "#0071bc" : "white", 
                boxShadow: isRunning ? "0px 0px 0px 0px":"0px 0px 20px 5px #0071bc"
              }}
            >
              <div style={{ color: isRunning ? "white" : "#0071bc" }} className="text timer-text">
                {Math.floor(timeLeft / 60)
                  .toString()
                  .padStart(2, "0")}
                :{(timeLeft % 60).toString().padStart(2, "0")}
              </div>
              <img
                src={isRunning ? timerClicked : timerNotClicked}
                className="timer-icon"
              />
            </button>
          </div>
        </div>
      )}

      {betterRunPage && (
        <div className="better-run-page">
          <div className="page-header">
            <div className="runing-program-week">{chosenWeek.week}</div>
            <div className="running-program-text">{chosenProgram.title}</div>
          </div>
          <div className="page-middle">
            {chosenProgram["program-details"].map((detail) => (
              <div className="text">{detail}</div>
            ))}
            <div className="page-end">
              <div className="text current-exercise">
                {chosenProgram["program-details"][currentStep]}
              </div>
              <button
                className="running-timer-button"
                onClick={() => setIsRunning(true)}
                disabled={isRunning}
              >
                <div className="text timer-text">
                  {Math.floor(timeLeft / 60)
                    .toString()
                    .padStart(2, "0")}
                  :{(timeLeft % 60).toString().padStart(2, "0")}
                </div>
                <img
                  src={isRunning ? timerClicked : timerNotClicked}
                  className="timer-icon"
                />
              </button>
            </div>
          </div>
        </div>
      )}

      {continuousRunPage && (
        <div className="continious-run-page">
          <div className="page-header">
            <div className="runing-program-week">{chosenWeek.week}</div>
            <div className="running-program-text">{chosenProgram.title}</div>
          </div>
          <div className="page-middle">
            <div className="text">{chosenProgram["program-details"]}</div>
            <button
              className="running-timer-button"
              onClick={() => setIsRunning(true)}
              disabled={isRunning}
            >
              <div className="text timer-text">
                {Math.floor(timeLeft / 60)
                  .toString()
                  .padStart(2, "0")}
                :{(timeLeft % 60).toString().padStart(2, "0")}
              </div>
              <img src={timerNotClicked} className="timer-icon" />
            </button>
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

export default RunningProgramWeeks;
