import cat from "./media/cat.svg";
import kanaf from "./media/kanaf.svg";
import school from "./media/school.svg";
import shaldag from "./media/shaldag.svg";
// import startbtn from "./media/startBtn.svg";

import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="start-page">
      <div className="logos">
        <img src={kanaf} alt="kanaf" className="logo" />
        <img src={school} alt="school" className="logo" />
        <img src={shaldag} alt="shaldag" className="logo" />
        <img src={cat} alt="cat" className="logo" />
      </div>
      <div className="top-text">
        <p className="text" id="start-title">
          כושר לגיוס
        </p>
        <p className="text" id="start-sub-title">
          הכן את גופך בהתאם!
        </p>
        <p className="text" id = "start-sentance">"המלמד ידיי לקרב אצבעותיי למלחמה"<br></br>תהילים קמ''ד א'</p>
        <p className="text">מועמד יקר! <br></br>התוכנית המצורפת נבנתה על מנת לאפשר לך<br></br>לקיים הכנה גופנית הולמת לקראת גיוסך ליחידה.<br></br>התוכנית מיועדת ל-10 שבועות טרם הגיוס.</p>
        <p id = "start-notice">שימו ♥:<br></br>עדיף להגיע למעמד גיוס בכושר גופני פחות טוב<br></br>אך במצב רפואי תקין וללא פציעות משמעותיות</p>
        <Link to = "/important-note" className="start-btn">בואו נתחיל!</Link>
      </div>
    </div>
  );
};

export default StartPage;
