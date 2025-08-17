import { useState, useEffect} from "react";
import schoolLogo from "./media/schoolLogo.svg";
import actualSchooLogo from "./media/school.svg";
import forwardBtn from "./media/forwardBtn.svg";
import backwardBtn from "./media/backwardBtn.svg";
import { useNavigate } from "react-router-dom";

const ImportantNotes = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [notes, setNotes] = useState([]);

  // making the popup appear for the first time the user opens the app
  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'data/db.json')
      .then((res) => res.json())
      .then((data) => {
        setNotes(data["imporatant-notes"]); // data is an array
        console.log("Fetched notes:", data);
      })
      .catch((err) => console.error("Fetch error:", err));
    const hasAccepted = sessionStorage.getItem("acceptedPopup");
    if (!hasAccepted) {
      setShowPopup(true);
    }
  }, []);

  // arrow keys functions
  const navigate = useNavigate();

  const handleForward = () => {
    if (showPopup) return;
    navigate("/need-page");

  };

  const handleBackward = () => {
    if (showPopup) return;
    navigate(-1);
  };

  // popup functions
  const handleAccepted = () => {
    setAccepted(true);
  };

  const handleContinue = () => {
    sessionStorage.setItem("acceptedPopup", "true");
    setShowPopup(false);
  };

  return (
    <div className="important-page">
      <img
        src={actualSchooLogo}
        alt="schoolLogo"
        className="logo"
        id="school-logo"
      />
      {/* popup text */}
      {showPopup && (
        <div className="important-popup">
          <div id="popup-text">
            <p className="text" id="important-text">
              תוכנית זו נכתבה נכתבה לצורכי מידע כללי בלבד ואינה מהווה תחליף
              לייעוץ אישי או מקצועי. התוכנית אינה אחראית לכל נזק, פציעה או תוצאה
              שתיגרם בעקבות ביצוע התרגלילם או ההמלצות הכלולות בה. האחריות על
              היישום חלה על המתאמן בלבד!
            </p>
            <label>
              <input
                type="radio"
                name="accept"
                value="yes"
                checked={accepted}
                onChange={handleAccepted}
              />
              קראתי ואני מאשר
            </label>
            <button
              className="important-continue"
              disabled={!accepted}
              onClick={handleContinue}
            >
              המשך
            </button>
          </div>
        </div>
      )}
      <img src={schoolLogo} alt="school-Logo" className="school-Logo" />
      <div className="notes-content">
        <p className="regular-title">דגשים חשובים</p>
        <ul className="all-notes">
          {notes.map((note) => (
            <li key={note.id}>{note.text}</li>
          ))}
        </ul>
      </div>
      <div className="buttons-move">
          <img
          src={forwardBtn}
          alt="continue"
          onClick={handleForward}
          className="move-button"
          id="forward-btn"
        />

        <img
          src={backwardBtn}
          alt="continue"
          onClick={handleBackward}
          className="move-button"
          id="backward-btn"
        />
      </div>
    </div>
  );
};

export default ImportantNotes;
