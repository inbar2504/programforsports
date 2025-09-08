import { useState } from "react";
import forwardBtn from "../media/forwardBtn.svg";
import backwardBtn from "../media/backwardBtn.svg";
import { useNavigate } from "react-router-dom";
import homeBtn from "../media/homeBtn.svg";
import actualSchooLogo from "../media/school.svg";
import closeBtn from "../media/close.svg";


const SwimmingProgram = () => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);

  const handleBackward = () => {
    navigate("/start-programs");
  };
  return (
    <div className="swimming-page-all">
      {popup && (
        <div className="swimming-popup">
          <img
            src={closeBtn}
            className="close-btn"
            onClick={() => {
              setPopup(false);
            }}
          />
          <div className="swimming-popup-text">
            הנחיות מומלצות:<br></br>יש להקפיד על שליטה טובה<br></br>בשחייה
            בסגנון חתירה- סגנון זה<br></br>מהווה את הבסיס לפעילות הימית<br></br>
            ביחידה
          </div>
          <div className="swimming-popup-text">
            מומלץ לרכוש גם שליטה בשחייה<br></br>בסגנון חזה ובסגנון גב, לצורך
            <br></br>הסתגלות למצבים משתנים ויכולת<br></br>שחייה מגוונת לאורך
            זמן.
          </div>
          <div className="swimming-popup-text">
            אנו ממליצים לשלב אימוני שחייה<br></br>כחלק אינטגרלי מתכנית האימונים
            <br></br>הכללית שלכם לקראת הגיוס.
          </div>
        </div>
      )}
      <div className="swimming-page-header">
        <div className="text page-title">שחייה</div>
        <div className="text swimming-small-message">*מיועד רק למתגייסים ליחידת 669</div>
      </div>
      <div className="page-middle">
        <div className="text text-box">
          במהלך הכשרת הלוחם ביחידה, <br></br>תידרשו לקחת חלק באימונים<br></br>
          בתווך הימי- מרכיב מרכזי<br></br>וייחודי למסלול ההכשרה.
        </div>
        <div className="text text-box">
          על מנת להבטיח מוכנות <br></br> מיטבית לקראת הגיוס וההכשרה,<br></br>אני
          ממליצים לבצע הכנה מוקדמת<br></br>בתחום השחייה.
        </div>
        <button
          className="darkBtn"
          onClick={() => {
            setPopup(true);
          }}
        >
          להנחיות מומלצות
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
          if (popup) return;
          navigate("/start-programs");
        }}
      />
      <div className="buttons-move">
        <img
          src={forwardBtn}
          alt="back"
          onClick={() => {
            if (popup) return;
            handleBackward();
          }}
          className="move-button"
          id="forward-btn"
        />
        <img
          src={backwardBtn}
          alt="next"
          style={{ visibility: "hidden" }}
          className="move-button"
          id="backward-btn"
        />
      </div>
    </div>
  );
};

export default SwimmingProgram;
