import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import forwardBtn from "./media/forwardBtn.svg";
import backwardBtn from "./media/backwardBtn.svg";

const NeedsPage = () => {
  const [needs, setNeeds] = useState([]);
  const navigate = useNavigate();

  // getting the info
  useEffect(() => {
    fetch("http://localhost:8000/needs-texts")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setNeeds(data);
        console.log(needs);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  //moving forwad and backwards
  const handleForward = () => {
    navigate("/need-page");
  };

  const handleBackward = () => {
    navigate(-1);
  };

  return (
    <div className="needs-page">
        {/* things to know */}
        <ul className="things-to-know">
            {needs.map((need) => (
            <li className = "need-box" key={need.id}> {need.title} </li>
          ))}
        </ul>

      {/* buttons */}
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

export default NeedsPage;
