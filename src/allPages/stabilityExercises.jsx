import { useNavigate } from "react-router-dom";

// comstant navigation btns
import forwardBtn from "../media/forwardBtn.svg";
import backwardBtn from "../media/backwardBtn.svg";
import closeBtn from "../media/close.svg";
import actualSchooLogo from "../media/school.svg";
import homeBtn from "../media/homeBtn.svg";

const StabilityExercises = () => {
  const navigate = useNavigate();
  return (
    <div className="stability-exercises-content">
      <div className="stability-page-header">
        <div className="text page-title-stability">
          תרגילי יציבות <br></br>וחיזוק בסיסיים
        </div>
        <div className="text small-message">לחץ לפירוט</div>
      </div>
      <div className="stability-page-middle">
        <div className="program-buttons">
          <button
            className="stability-popup"
            onClick={() => {
              navigate("/lower-back-stability");
            }}
          >
            שיפור תפקוד גב תחתון
          </button>
          <button className="stability-popup">שיפור תפקוד חגורת כתפיים</button>
          <button className="stability-popup">
            שיפור תפקוד הקרסול, שוק וכף הרגל
          </button>
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
          alt="back"
          onClick={() => {
            navigate("/start-programs")
          }}
          className="move-button"
          id="forward-btn"
        />
        <img
          src={backwardBtn}
          alt="next"
          className="move-button"
          id="backward-btn"
          style={{ visibility: "hidden"}}
        />
      </div>
    </div>
  );
};

export default StabilityExercises;
