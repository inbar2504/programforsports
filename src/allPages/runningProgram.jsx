import forwardBtn from "../media/forwardBtn.svg";
import backwardBtn from "../media/backwardBtn.svg";
import { useNavigate } from "react-router-dom";
import homeBtn from "../media/homeBtn.svg";
import actualSchooLogo from "../media/school.svg";

const RunningProgram = () => {
  const navigate = useNavigate();

  const handleForward = () => {
    console.log("next");
  };

  const handleBackward = () => {
    navigate(-1);
  };

  return (
    <div className="running-program-page">
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
          <p className="text running-text">מומלץ לבצע אותם בהפרשים של לפחות יום אחד מהשני</p>
          <div className="popup-buttons-running">
            
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
