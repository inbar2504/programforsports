import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// comstant navigation btns
import forwardBtn from "../media/forwardBtn.svg";
import backwardBtn from "../media/backwardBtn.svg";
import closeBtn from "../media/close.svg";
import actualSchooLogo from "../media/school.svg";
import homeBtn from "../media/homeBtn.svg";

//stretches photos
import backArmStretch from "../media/stretching/backArmsStretch.png";
import butterflySitStretch from "../media/stretching/butterflySitStretch.png";
import elbowStretch from "../media/stretching/elbowStretch.png";
import headRollStretch from "../media/stretching/headRollStretch.png";
import layingStretch from "../media/stretching/layingStretch.png";
import layingStretches from "../media/stretching/layingStretches.png";
import lungeStretch from "../media/stretching/lungeStretch.png";
import sideStretch from "../media/stretching/sideStretch.png";
import sittingLegStretch from "../media/stretching/sittingLegStretch.png";
import sittingStandingStretch from "../media/stretching/sittingStandingStretch.png";
import spineStretch from "../media/stretching/spineStretch.png";
import twinStretch from "../media/stretching/twinStretch.png";

const StretchingProgram = () => {
  const [currPage, setCurrPage] = useState(0);
  const [stretches, setStretches] = useState([]);
  const navigate = useNavigate();
  const [titles, setTitles] = useState([]);
  const [descs, setDescs] = useState([]);
  const [notes, setNotes] = useState([]);
  const [totalPages, setTotalPAges] = useState(12);
  const [timerRunning, setTimerRunning] = useState(false);
  const stretchesImages = [
    elbowStretch,
    sideStretch,
    backArmStretch,
    layingStretch,
    spineStretch,
    headRollStretch,
    layingStretches,
    lungeStretch,
    sittingStandingStretch,
    sittingLegStretch,
    butterflySitStretch,
    twinStretch,
  ];
  const [timeLefts, setTimeLefts] = useState(Array(totalPages).fill(20));
  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setStretches(data.stretching);
        const titlesArray = data.stretching.map((item) => item.title);
        const descsArray = data.stretching.map(
          (item) => item["stretch-description"]
        );
        const notesArray = data.stretching.map((item) => item.notes);
        console.log(data.stretching);

        setTitles(titlesArray);
        setDescs(descsArray);
        setNotes(notesArray);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleForward = () => {
    if (currPage != 11) {
      setCurrPage(currPage + 1);
    }
  };

  const handleBackward = () => {
    if (currPage != 0) {
      setCurrPage(currPage - 1);
    } else {
      navigate("/start-programs");
    }
  };

  // inside your component
  useEffect(() => {
    if (!timerRunning) return;

    const interval = setInterval(() => {
      setTimeLefts((prev) => {
        const newArr = [...prev];
        if (newArr[currPage] <= 1) {
          newArr[currPage] = 0;
          setTimerRunning(false);
          clearInterval(interval);
        } else {
          newArr[currPage] -= 1;
        }
        return newArr;
      });
    }, 1000);

    return () => clearInterval(interval); // cleanup if component unmounts
  }, [timerRunning, currPage]);

  return (
    <div className="stretching-exercies-page">
      <div className="page-header-stretches">
        <div className="text page-title">מתיחות</div>
        <div className="text small-message">לחץ לפירוט</div>
      </div>
      <div className="page-middle-stretches">
        <div className="text page-title">{titles[currPage]}</div>
        <img src={stretchesImages[currPage]} />
        <div className="text timer-stretches">
          {timeLefts[currPage] > 0 ? `${timeLefts[currPage]} שניות` : "סיימת!"}
        </div>
        <button
          className="running-popup"
          onClick={() => setTimerRunning(true)}
          disabled={timeLefts[currPage] <= 0 || timerRunning}
        >
          הפעל טיימר
        </button>
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
          alt="continue"
          onClick={() => {
            handleForward();
          }}
          className="move-button"
          id="forward-btn"
          style={{ visibility: currPage === 11 ? "hidden" : "visible" }}
        />
        <img
          src={backwardBtn}
          alt="back"
          onClick={() => {
            handleBackward();
          }}
          className="move-button"
          id="backward-btn"
        />
      </div>
    </div>
  );
};

export default StretchingProgram;
