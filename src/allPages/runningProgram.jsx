import forwardBtn from "../media/forwardBtn.svg";
import backwardBtn from "../media/backwardBtn.svg";
import { useNavigate } from "react-router-dom";
import homeBtn from "../media/homeBtn.svg";
import actualSchooLogo from "../media/school.svg";
import { useState } from "react";
import closeBtn from "../media/close.svg";

const RunningProgram = () => {
  const navigate = useNavigate();
  const [continuousRun, setContinuousRun] = useState(false);
  const [betterRun, setBetterRun] = useState(false);

  const handleForward = () => {
    if (continuousRun || betterRun) return;
    navigate("/running-program-weeks");
  };

  const handleBackward = () => {
    if (continuousRun || betterRun) return;
    navigate('/start-programs');
  };

  return (
    <div className="running-program-page">
      {continuousRun && (
        <div className="run-popup">
          <img
            src={closeBtn}
            className="close-btn"
            onClick={() => {
              setContinuousRun(false);
            }}
          />
          <div className="running-text-content">
            <div className="text running-popup-title">ריצת רצף:</div>
            <div className="text running-popup-text">
              ריצה רצופה בקצב קל ללא שינויי מהירות, ריצה זו צריכה להתבצע בעצימות
              נמוכה המאפשרת לך לנהל שיחה
            </div>
          </div>
        </div>
      )}
      {betterRun && (
        <div className="run-popup better-runs-popup">
          <img
            src={closeBtn}
            className="close-btn"
            onClick={() => {
              setBetterRun(false);
            }}
          />
          <div className="running-text-content">
            <div className="text running-popup-title">ריצות איכות:</div>
            <div className="text running-popup-text">
              <ul className="better-runs-types">
                <li className="text running-type">	ריצה מתפתחת- ריצה רצופה המתחילה בקצב קל ומתגברת תוך כדי הריצה עד לסיומה. באימון זה יש לחלק את הריצה ל3 חלקים: חלק ראשון קל (כמו ריצת רצף קלה), חלק שני בינוני, חלק שלישי מהיר.</li>
                <li className="text running-type">	ריצת שינויי קצב- ריצה רצופה שבה מתבצעים שינויי קצב במהלך הריצה.מבצעים מקטע בקצב מהיר, חוזרים למקטע איטי - התאוששות וחוזרים למקטע מהיר.</li>
                <li className="text running-type">	.מתגברות בסוף הריצה- קטעי ריצה קצרים (עד 100 מטר) בהם יתורגל קצב ריצה מהי, ביצוע המתגברות יהי באופן הבא: 20 שניות ריצה מתגברת שלאחריה 40 שניות ריצה קלה מאוד</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="text-contet">
        <div className="page-header-running-start">
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
              <button
                className="running-popup"
                onClick={() => {
                  setContinuousRun(true);
                }}
              >
                ריצת רצף
              </button>
              <button
                className="running-popup"
                onClick={() => {
                  setBetterRun(true);
                }}
              >
                ריצת איכות
              </button>
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
          if (continuousRun || betterRun) return;
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
