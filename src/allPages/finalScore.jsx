import forwardBtn from "../media/forwardBtn.svg";
import backwardBtn from "../media/backwardBtn.svg";
import actualSchooLogo from "../media/school.svg";
import homeBtn from "../media/homeBtn.svg";
import { useNavigate } from "react-router-dom";
import table from "/data/scoreNeededTable.png";
const FinalScorePage = () => {
  const navigate = useNavigate();

  const handleBackward = () => {
    navigate("/start-programs");
  };

  return (
    <div className="final-score-page">
      <div className="score-page-header">
        <div className="text page-title">סף כניסה</div>
        <div className="text small-message">סף כניסה</div>
      </div>
      <div className="page-middle">
        <ul className="score-indicators">
            <li className="text">כחלק ממבחני הכושר הגופני שתעברו במהלך ההכשרה, אתם תבחנו בבוחן הכש"ג- בוחן כושר גופני.</li>
            <li className="text">בוחן הכש"ג כולל בתוכו 5 פרמטרים- ריצה- 3 ק"מ, ספרינטים- 150X2, כוח- מתח, מקבילים/לחיצת חזה/ TRAP BAR.</li>
            <li className="text">הבוחן מתחלק ל3 רמות אותן תעברו במהלך ההכשרה- רמה 2 ללא משקל, רמה 2 עם משקל,רמה 3 עם משקל.</li>
        </ul>
        <a href={table} download="scoreNeededTable.png">
          <button className="download-btn">הורד</button>
        </a>
        <iframe width={250} height={150} src="https://www.youtube.com/embed/QZR1Y82OLqw" allowFullScreen></iframe>
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
          className="move-button"
          id="forward-btn"
          onClick={() => {
            handleBackward();
          }}
        />
        <img
          src={backwardBtn}
          alt="back"
          
          className="move-button"
          id="backward-btn"
          style={{ visibility: "hidden" }}

        />
      </div>
    </div>
  );
};

export default FinalScorePage;
