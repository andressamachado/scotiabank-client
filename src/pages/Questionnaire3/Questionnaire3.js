import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OptionCard from "../../components/OptionCard/OptionCard";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import backArrowIcon from "../../assets/icons/back-arrow.svg";
import loadingIcon from "../../assets/icons/loading.svg";
import "./questionnaire3.scss";

const Questionnaire = () => {
  const [showModal, setShowModal] = useState(false);

  const options = ["Call", "In-app chat", "In person meeting"];

  const testData = [{ bgcolor: "#757575", completed: 66 }];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/questionnaire/3");
  };

  const handleBackButton = () => {
    navigate("/questionnaire/2");
  };

  const handleFinishButton = () => {
    setShowModal(true);
    setTimeout(() => {
      navigate("/advisors");
    }, 3000);
  };

  return (
    <section className="questionnaire3">
      {/* question section */}
      <h2> What is your preferred mode of communication with your advisor? </h2>
      {options.map((option) => {
        return <OptionCard answer={option} onClick={handleClick} />;
      })}

      <div className="questionnaire3__progress-bar">
        {testData.map((item, i) => (
          <ProgressBar
            key={i}
            bgcolor={item.bgcolor}
            completed={item.completed}
          />
        ))}
      </div>

      {/* next question button section */}
      <div className="questionnaire3__bottom-container">
        <button className="questionnaire3__button" onClick={handleBackButton}>
          <img src={backArrowIcon} />
        </button>
        <button
          className="questionnaire3__finish-button"
          onClick={handleFinishButton}
        >
          Finish
        </button>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <img src={loadingIcon} alt="loading icon" />
            <h3> Give us a moment!</h3>
            <p>
              Finding the most suitable wealth management advisors for you...
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Questionnaire;
