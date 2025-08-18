import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import forwardBtn from "./media/forwardBtn.svg";
import backwardBtn from "./media/backwardBtn.svg";
import closeBtn from "./media/close.svg";

const NeedsPage = () => {
  const [needs, setNeeds] = useState([]);
  const [needPopup, setNeedPopup] = useState(false);
  const [needText, setNeedText] = useState(" ");
  const [activeNeedId, setActiveNeedId] = useState(null);
  const navigate = useNavigate();

  // getting the info
  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "data/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setNeeds(data["needs-texts"]);
        console.log(needs);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleNeedClick = (need) => {
    setNeedPopup(true);
    setNeedText(need.text);
    setActiveNeedId(need.id);
  };

  const handleNeedClose = () => {
    setNeedPopup(false);
    setActiveNeedId(null); // reset
  };

  //moving forwad and backwards
  const handleForward = () => {
    navigate("/need-page");
  };

  const handleBackward = () => {
    navigate(-1);
  };

  return (
    <div className="needs-page">
      {needPopup && (
        <div className="need-popup">
          <img
            src={closeBtn}
            alt="close"
            className="close-btn"
            onClick={handleNeedClose}
          />
          <p className="text" id="need-text">
            {" "}
            {needText}{" "}
          </p>
        </div>
      )}
      <div className="page-header">
        <div className="text" id="page-title">על מה נדרש להקפיד</div>
        <div className="text" id="small-message">לחץ לפירוט</div>
      </div>
      {/* things to know */}
      <ul className="things-to-know">
        {needs.map((need) => (
          <li
            className="need-box"
            key={need.id}
            onClick={() => {
              if (activeNeedId === null) {
                handleNeedClick(need);
              }
            }}
          >
            {" "}
            {need.title}{" "}
          </li>
        ))}
      </ul>

      {/* buttons */}
      <div className="buttons-move">
        <img
          src={forwardBtn}
          alt="continue"
          onClick={() => {
            if (activeNeedId === null) {
              handleForward();
            }
          }}
          className="move-button"
          id="forward-btn"
        />

        <img
          src={backwardBtn}
          alt="continue"
          onClick={() => {
            if (activeNeedId === null) {
              handleBackward();
            }
          }}
          className="move-button"
          id="backward-btn"
        />
      </div>
    </div>
  );
};

export default NeedsPage;
