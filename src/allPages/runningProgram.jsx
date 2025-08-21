import forwardBtn from "../media/forwardBtn.svg";
import backwardBtn from "../media/backwardBtn.svg";
import { useNavigate } from "react-router-dom";
import homeBtn from "../media/homeBtn.svg";
import actualSchooLogo from "../media/school.svg";
import { useState } from "react";
import closeBtn from "../media/close.svg"

const RunningProgram = () => {
  const navigate = useNavigate();
  const [continuousRun, setContinuousRun] = useState(false);
  const [betterRun, setBetterRun] = useState(false);

  const handleForward = () => {
    console.log("next");
  };

  const handleBackward = () => {
    navigate(-1);
  };

  return (
    <div className="running-program-page">
      
      {continuousRun && (
        <div className="run-popup">
          <img src = {closeBtn} className ="close-btn" onClick={() => {
            setContinuousRun(false);
          }}/>
          <div className="running-text-content">
            <div className="text running-popup-title">ריצת רצף:</div>
            <div className="text running-popup-text">ריצה רצופה בקצב קל ללא שינויי מהירות, ריצה זו צריכה להתבצע בעצימות נמוכה המאפשרת לך לנהל שיחה</div>
          </div>
        </div>
      )}

      <div className="text-contet">
        <div className="page-header running-header">
          <div className="text page-title">תוכנית אימונים ריצה</div>
          <div className="text small-message">דגשים</div>
        </div>
        <div className="middle-text">
          <p className="text running-text">בכל שבוע יתבצעו 2 ריצות!</p>
          <p className="text running-text">אימון רצף & אימון ריצת איכות</p>
        </div>
        <div className="bottom-text">
          <p className="text running-text">
            מומלץ לבצע אותם בהפרשים של לפחות יום אחד מהשני
          </p>
          <div className="popup-buttons-running">
            <p className="text blue-text">לחץ לפירוט</p>
            <div className="running-buttons">
              <button className="running-popup" onClick={() => {
                setContinuousRun(true);
              }}>ריצת רצף</button>
              <button className="running-popup" onClick={() => {
                betterRun(true);
              }}>ריצת איכות</button>
            </div>
          </div>
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
      {/* buttons */}
      <div className="buttons-move">
        <img
          src={forwardBtn}
          alt="continue"
          onClick={() => {
            handleForward();
          }}
          className="move-button"
          id="forward-btn"
        />

        <img
          src={backwardBtn}
          alt="continue"
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

export default RunningProgram;
