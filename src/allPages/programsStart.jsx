import forwardBtn from "../media/forwardBtn.svg";
import backwardBtn from "../media/backwardBtn.svg";
import { useNavigate } from "react-router-dom";
import actualSchooLogo from "../media/school.svg";

const ProgramPage = () => {
  const navigate = useNavigate();

  const handleForward = () => {
    navigate("/start-programs");
  };

  const handleBackward = () => {
    navigate("/slides-page");
  };

  return (
    <div className="all-content-programs">
      <img
        src={actualSchooLogo}
        alt="schoolLogo"
        className="logo"
        id="school-logo"
      />
      <div className="programs-page-content">
        <div className="programs-page-header">
          <div className="text page-title">יאללה, לעבודה!</div>
          <div className="text small-message">לחץ לפירוט</div>
        </div>

        {/* things to know */}
        <div className="programs">
          <div className="program-sports">
            <p
              className="program-text"
              onClick={() => {
                navigate("/running-program");
              }}
            >
              תוכנית אימונים ריצה
            </p>
          </div>
          <div className="program-sports">
            <p className="program-text">תוכנית אימונים כוח</p>
          </div>
          <div className="program-sports">
            <p className="program-text">תרגילי יציבות וחיזוק בסיסיים</p>
          </div>
          <div className="program-sports" onClick = {() => {navigate("/stretching-program")}}>
            <p className="program-text">מתיחות</p>
          </div>
          <div className="program-sports" onClick = {() => {navigate("/swimming-program")}}>
            <p className="program-text">שחייה</p>
          </div>
          <div className="program-sports" onClick = {() => {navigate("/final-score-table")}}>
            <p className="program-text">סף כניסה-בוחן כש''ג</p>
          </div>
        </div>

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
            style={{ visibility: "hidden" }}
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
    </div>
  );
};

export default ProgramPage;
