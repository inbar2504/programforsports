import whatsappIcon from "../media/whatsappIcon.svg";
import cat from "../media/cat.svg";
import kanaf from "../media/kanaf.svg";
import school from "../media/school.svg";
import shaldag from "../media/shaldag.svg";

const EndingPage = () => {
  return (
    <div className="ending-page-content">
      <div className="logos">
        <img src={kanaf} alt="kanaf" className="logo" />
        <img src={school} alt="school" className="logo" />
        <img src={shaldag} alt="shaldag" className="logo" />
        <img src={cat} alt="cat" className="logo" />
      </div>
      <div className="ending-page-header">
        <div className="text ending-page-title">כל הכבוד<br></br> סיימתם את הלומדה!</div>
        <div className="text ending-small-message">נתראה במועד הגיוס...</div>
      </div>
    </div>
  );
};

export default EndingPage;
