import forwardBtn from "./media/forwardBtn.svg";
import backwardBtn from "./media/backwardBtn.svg";
import { useNavigate } from "react-router-dom";

const ProgramPage = () => {
  const navigate = useNavigate();

  const handleForward = () => {
    navigate("/start-programs");
  };

  const handleBackward = () => {
    navigate(-1);
  };

  return (
    <div className="all-content-programs">
      <div className="programs-page-content">
        <div className="programs-page-header">
          <div className="text page-title">יאללה, לעבודה!</div>
          <div className="text small-message">לחץ לפירוט</div>
        </div>

        {/* things to know */}
        <div className="programs">
          <div className="program-sports">
            <p className="program-text">תוכנית אימונים ריצה</p>
          </div>
          <div className="program-sports">
            <p className="program-text">תוכנית אימונים כוח</p>
          </div>
          <div className="program-sports">
            <p className="program-text">תרגילי יציבות וחיזוק בסיסיים</p>
          </div>
          <div className="program-sports">
            <p className="program-text">מתיחות</p>
          </div>
          <div className="program-sports">
            <p className="program-text">שחייה</p>
          </div>
          <div className="program-sports">
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
